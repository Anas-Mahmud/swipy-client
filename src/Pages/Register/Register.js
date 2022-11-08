import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleSignUp = event => {
        event.preventDefault();
    }

    return (
        <div>
            <section className="flex flex-wrap lg:h-screen lg:items-center px-5 bg-slate-100">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
                        <p className="mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                            eaque error neque ipsa culpa autem, at itaque nostrum!
                        </p>
                    </div>
                    <form onSubmit={handleSignUp} action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                        <div>
                            <label for="email" className="sr-only">Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name='name'
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter your name"
                                />
                            </div>
                        </div>
                        <div>
                            <label for="email" className="sr-only">Email</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    name='email'
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label for="password" className="sr-only">Password</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    name='password'
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500">
                                Already have an account?
                                <Link to={'/login'} className="underline text-purple-600"> Login</Link>
                            </p>
                            <input className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit" value="Register" />
                        </div>
                    </form>
                </div>
                <div className="h-64 w-full sm:h-96 lg:w-1/2">
                    <img
                        alt="Welcome"
                        src="https://static.vecteezy.com/system/resources/previews/005/879/539/original/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
                        className="rounded-xl"
                    />
                </div>
            </section>
        </div>
    );
};

export default Register;