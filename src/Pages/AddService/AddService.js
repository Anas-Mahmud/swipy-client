import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const serviceId = services.map(service => service.service_id);

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const price = form.price.value;
        const details = form.details.value;

        const service = {
            service_id: serviceId,
            title: name,
            img: photoUrl,
            price,
            description: details,
        }
        console.log(service);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(service)
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
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    Get started today
                </h1>
                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
                    dolores deleniti inventore quaerat mollitia?
                </p>
                <form onSubmit={handleAddService} className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
                    <p className="text-lg font-medium">Sign in to your account</p>
                    <div>
                        <label for="password" className="text-sm font-medium">Service Name</label>
                        <div className="relative mt-1">
                            <input
                                type="text"
                                id="text"
                                name="name"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="service name"
                            />
                        </div>
                    </div>
                    <div>
                        <label for="email" className="text-sm font-medium">Service Photo url</label>
                        <div className="relative mt-1">
                            <input
                                type="text"
                                id="text"
                                name="photoUrl"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="photo url"
                            />
                        </div>
                    </div>
                    <div>
                        <label for="password" className="text-sm font-medium">Service Price</label>
                        <div className="relative mt-1">
                            <input
                                type="text"
                                id="text"
                                name="price"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="service details"
                            />
                        </div>
                    </div>
                    <div>
                        <label for="email" className="text-sm font-medium">Service Details</label>
                        <div className="relative mt-1">
                            <input
                                type="text"
                                id="text"
                                name="details"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="service details"
                            />
                        </div>
                    </div>
                    <div>
                        <input className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;