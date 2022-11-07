import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo-light.png';

const Footer = () => {
    return (
        <footer class="p-4 mt-4 bg-black rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div class="sm:flex sm:items-center sm:justify-between">
                <img src={logo} className="mr-3 h-8 " alt="Swipy Logo" />
                <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-200 sm:mb-0 dark:text-gray-400">
                    <li>
                        <Link href="#" class="mr-4 hover:underline md:mr-6 ">About</Link>
                    </li>
                    <li>
                        <Link href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</Link>
                    </li>
                    <li>
                        <Link href="#" class="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-200 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">Swipy™</a>. All Rights Reserved.
            </span>
        </footer>

    );
};

export default Footer;