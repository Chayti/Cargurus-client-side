import React from "react";
import './MyOrder.css';

const MyOrder = (props) => {
    const { _id, name, price, description, img, status } = props.product;
    return (
        <div className="my-order py-4">
            <img className="m-3" src={img} alt="" />
            <h3 className="px-3">{name}</h3>
            <h3 className="px-3">{price}</h3>
            <p className="px-3">{description}</p>
            <span className="bg-primary p-2 text-white">Status : {status}</span>
            <br />
            <br />
            <button className="btn delete-btn mx-3 mt-0" onClick={() => props.handleDelete(_id)}>Delete</button>
        </div>
    );
}

export default MyOrder;