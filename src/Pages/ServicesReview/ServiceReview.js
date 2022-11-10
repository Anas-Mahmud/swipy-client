import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ServiceReview = ({ data }) => {
    const { user } = useContext(AuthContext);
    const { serviceId, serviceName } = data;

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const photoUrl = form.photoUrl.value;
        const email = user?.email || 'unregistered';
        const reviewMessage = form.review.value;

        const review = {
            service: serviceId,
            serviceName,
            customer: name,
            photoUrl,
            email,
            reviewMessage
        }
        console.log(review);

        fetch('https://swipy-server-anas-mahmud.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Thanks for your feedback')
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <section className="bg-white">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12 grid-cols-6">
                    <section className="relative flex h-20 items-end bg-gray-900 lg:col-span-5 mt-44 lg:h-2/3 xl:col-span-6">
                        <img
                            alt="Night"
                            src="https://i.pinimg.com/originals/62/0f/39/620f39ce8c3d0eeb9ae1241f7b78f704.gif"
                            className="absolute inset-0 h-full w-full object-cover opacity-80"
                        />
                        <div className="hidden lg:relative lg:block lg:p-12">
                            <h2 className="mt-6 text-2xl font-bold ml-28 text-white sm:text-3xl md:text-4xl">
                                Give Your Feedback
                            </h2>
                        </div>
                    </section>
                    <main
                        aria-label="Main"
                        className="flex items-center justify-center px-8 sm:px-12 lg:px-10 xl:col-span-6"
                    >
                        <div className="max-w-xl lg:max-w-3xl">
                            <form onSubmit={handleReview} className="mt-8 grid grid-cols-6 gap-6 sh">
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        for="FirstName"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        First Name
                                    </label>

                                    <input
                                        type="text"
                                        id="FirstName"
                                        name="firstName"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        for="LastName"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Last Name
                                    </label>

                                    <input
                                        type="text"
                                        id="LastName"
                                        name="lastName"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        for="photo-url"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Photo url
                                    </label>

                                    <input
                                        type="text"
                                        name="photoUrl"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        for="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        defaultValue={user?.email}
                                        readOnly
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label for="Email" className="block text-sm font-medium text-gray-700">
                                        Your Review
                                    </label>

                                    <textarea
                                        name="review"
                                        required
                                        className="textarea mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4 mx-auto">
                                    <input className="inline-block shrink-0 rounded-md border py-2 px-28 border-blue-600 bg-blue-600 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500" type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </section>
        </div>
    );
};

export default ServiceReview;