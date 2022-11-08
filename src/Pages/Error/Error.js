import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="grid h-screen place-content-center bg-white">
            <div className="text-center">
                <img className='' src="https://indomitechgroup.com/wp-content/uploads/2022/07/funny-404-error-page-design.gif" alt="" />
                <h1 className="text-2xl font-bold tracking-tight text-amber-500 sm:text-5xl">Uh-oh!</h1>
                <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Look like you're lost</h1>
                <p className="mt-4 text-lg font-medium text-gray-500">The page you are looking for not availble</p>
                <Link to={'/'}>
                    <button className="mt-5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-amber-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Back to home
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Error;