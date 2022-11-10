import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';
import useTitle from '../../hooks/useTitle';

const MyReview = () => {
    useTitle('My Review')
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState({});

    useEffect(() => {
        if (!user?.email) {
            return
        }
        fetch(`http://localhost:5000/myReview?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                setReviews(data)
            })
    }, [user?.email, logOut])
    console.log(reviews);

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure, you want to delete this comment...??");
        if (proceed) {
            fetch(`http://localhost:5000/myReview/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Delete successfully');
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    const handleUpdate = id => {
        fetch(`http://localhost:5000/myReview/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
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
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-5 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                    </div>
                    {
                        !reviews?.length ?
                            <h2 className='text-4xl font-bold text-orange-600'>No reviews were added</h2>
                            :
                            <div class="grid lg:grid-cols-2 grid-cols-1">
                                {
                                    reviews?.length &&
                                    reviews?.map(review => <MyReviewRow
                                        key={review._id}
                                        review={review}
                                        handleDelete={handleDelete}
                                        handleUpdate={handleUpdate}
                                    ></MyReviewRow>)
                                }
                            </div>
                    }
                </div>
            </section>
        </div>
    );
};

export default MyReview;