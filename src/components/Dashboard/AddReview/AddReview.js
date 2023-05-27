import React from 'react';
import './AddReview.css';
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        data.email = user?.email;
        console.log(data);
        axios.post('https://cargurus-server-side.vercel.app/addReview', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thanks for your review!')
                    reset()
                }
            })
    };
    return (
        <div>
            <h2 className="text-center text-primary fw-bold">Please Add Your review</h2>
            <div className="user-review-banner m-auto mt-3">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form front-bg">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className="m-2 p-2"
                                value={user?.displayName}
                                {...register("name", { required: true })}
                            /><br />

                            <input
                                className="m-2 p-2"
                                name="email"
                                value={user?.email}
                                type="email"
                                {...register("email", { required: true })}
                            />
                            <br />

                            <input
                                className="m-3 p-2"
                                placeholder="rating(0-5)"
                                defaultValue="0"
                                type="number"
                                {...register("rating")}
                            /><br />

                            <textarea
                                className="m-3 p-2"
                                placeholder="Comments"
                                {...register("comments")}
                            /><br />


                            <button className="btn border-2 border-success rounded-pill">Add Review</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;