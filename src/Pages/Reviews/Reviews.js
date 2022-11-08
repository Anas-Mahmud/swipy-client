import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Reviews = () => {
    const { title, img, price, description } = useLoaderData();
    return (
        <div>
            <div className="flex flex-col items-center bg-white rounded-2xl border shadow-md md:flex-row lg:max-w-full md:max-w-5xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="md:w-1/3 lg:rounded-3xl md:rounded-none" src={img} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="mb-3 font-medium text-gray-700 dark:text-gray-400">{description}</p>
                    <p className='font-bold text-lg text-purple-700'>Service price: ${price}</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;