import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { title, img, price, description } = service;
    return (

        <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <img className="p-8 rounded-t-lg h-72 w-full" src={img} alt="" />
            <div className="px-5 pb-5">
                <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">{title}</h5>
                <>
                    {
                        description.length > 100 ?
                            <p>{description.slice(0, 100) + '...'}</p>
                            :
                            <p>{description}</p>
                    }
                </>
                <div className="flex justify-between items-center mt-5">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">Price: ${price}</span>
                    <Link href="#" className="text-white bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</Link>
                </div>
            </div>
        </div>

    );
};

export default ServicesCard;