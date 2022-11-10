import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className="relative bg-[url(https://railsware.com/blog/wp-content/uploads/2019/04/illustration.jpg)] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>
            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="max-w-xl text-center sm:text-left">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        We Design
                        <strong className="block font-extrabold text-purple-600">Digital Products. </strong>
                    </h1>
                    <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                        We are a digital agency that focuses on solving your problems by making a product that will exceed your expectations so far.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <Link to={'/services'} className="block w-full rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-800 focus:outline-none focus:ring active:bg-purple-600 sm:w-auto">
                            Services
                        </Link>
                        <Link to={'/blogs'} className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-purple-600 shadow hover:text-purple-700 focus:outline-none focus:ring active:text-purple-600 sm:w-auto">
                            Blog
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Banner;