import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { signIn, providerLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }

                // get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(err => console.error(err));
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => console.error(err));
    }

    return (
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-lg">
                <h1 class="text-center text-2xl font-bold text-purple-600 sm:text-3xl">
                    Please Login
                </h1>
                <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Enter your personal details and start <br /> journey with us
                </p>
                <form onSubmit={handleLogin} class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
                    <p class="text-lg font-medium">Login to your account</p>
                    <div>
                        <label for="email" class="text-sm font-medium">Email</label>
                        <div class="relative mt-1">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Enter email"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label for="password" class="text-sm font-medium">Password</label>
                        <div class="relative mt-1">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                class="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                                placeholder="Enter password"
                                required
                            />
                        </div>
                    </div>
                    <input class="block w-full rounded-lg bg-purple-600 px-5 py-3 text-sm font-medium text-white" type="submit" value="Login" />
                    <p class="text-center text-sm text-gray-500">
                        No account?
                        <Link to={'/register'} class="underline text-purple-700"> Register</Link>
                    </p>
                    <button onClick={handleGoogleSignIn} type="button" class="text-white bg-slate-500 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                        <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        Sign in with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;