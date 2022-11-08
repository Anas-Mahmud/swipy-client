import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
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
                <form onSubmit={handleLogin} action="" class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
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
                </form>
            </div>
        </div>
    );
};

export default Login;