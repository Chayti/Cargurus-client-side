import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './ProductDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faNotesMedical, faHandHoldingUsd, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { Card, CardGroup } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const ProductDetail = () => {

    const { user } = useAuth();
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`https://spooky-skull-68797.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                console.log(`https://spooky-skull-68797.herokuapp.com/services/${serviceId}`)
                setService(data)
            }
            );
    }, [serviceId])
    console.log(serviceId)

    const onSubmit = data => {
        data.serviceId = serviceId
        data.name = service.name
        data.img = service.img
        data.description = service.description
        data.status = 'pending'
        fetch('https://spooky-skull-68797.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Your booking processed Successfully');
                    reset();
                }
            })
    };

    return (
        <div>
            <Header></Header>
            <div className="service-banner d-flex align-items-center justify-content-center ">
                <div className="front-bg mb-5">

                    <h1>Welcome to {service.name}</h1>

                    <h2>Join us!! Be happy with us!!! Enjoy the whole world!!!</h2>
                    <br /><br />
                    <button className="btn py-3 px-5 fs-4">Book for {service.name}</button>
                </div>
            </div>
            <div className="container my-5 service-detail">
                <h1>What is the {service.name}?</h1>
                <img className="my-3" src={service.img} alt="..." />
                <h4>{service.description}</h4>
                <br />
                <h2 className="text-start fw-bold bg-info text-success d-inline">Price: $60</h2>
                <br />
                <div>
                    <div className="shipping-form-bg d-flex justify-content-center">
                        <form className="shipping-form my-4" onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("name")} /><br />

                            <input defaultValue={user.email} {...register("email", { required: true })} /><br />
                            {errors.email && <span className="error">This field is required</span>}
                            <input placeholder="Address" defaultValue="" {...register("address")} /><br />
                            <input placeholder="City" defaultValue="" {...register("city")} /><br />
                            <input placeholder="phone number" defaultValue="" {...register("phone")} /><br />

                            <input type="submit" value="Book Now" />
                        </form>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ProductDetail;