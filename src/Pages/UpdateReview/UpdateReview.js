import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const [reviews, setReviews] = useState({});
    const data = useLoaderData();
    console.log(data);

    const handleUpdate = (id, event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const reviewMessage = form.comment.value;

        const updateReview = {
            title,
            reviewMessage
        }
        console.log(updateReview);

        fetch(`https://swipy-server-anas-mahmud.vercel.app/myReview/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    const remaining = reviews.filter(review => review._id !== id)
                    const updated = reviews.find(review => review._id === id)

                    const newReviews = [...remaining, updated];
                    setReviews(newReviews);
                }
            })
    }

    return (
        <div>
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-lg">
                    <form onSubmit={handleUpdate} class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
                        <div>
                            <div class="relative mt-1">
                                <input
                                    type="text"
                                    name='title'
                                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <div class="relative mt-1">
                                <input
                                    type="text"
                                    name='comment'
                                    class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                />
                            </div>
                        </div>
                        <input class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white" type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default UpdateReview;