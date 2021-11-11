import React from 'react';
import './AddProduct.css';
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from '../../../hooks/useAuth';

const AddProduct = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        data.email = user?.email;
        console.log(data);
        axios.post('http://localhost:5000/addProduct', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()
                }
            })
    };
    return (
        <div>
            <h2 className="mt-5 text-center text-primary fw-bold">Please Add Products</h2>
            <div className="admin-banner m-auto mt-3">
                <div className="event-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form front-bg">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="m-2 p-2" placeholder="Product name" {...register("name", { required: true })} /><br />

                            <input className="m-3 p-2" placeholder="Image URL" {...register("img")} />
                            <br />

                            <input className="m-3 p-2" placeholder="Price" defaultValue="" {...register("price")} /><br />

                            <textarea className="m-3 p-2" placeholder="Description" {...register("description")} /><br />


                            <button className="btn border-2 border-success rounded-pill">Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;