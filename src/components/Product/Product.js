import React from "react";
import { Link } from "react-router-dom";
import './Product.css';

const Product = ({ product }) => {
    const { _id, name, description, img, price } = product;
    return (
        <div className="product py-4">
            <img className="m-3" src={img} alt="" />
            <h3 className="px-3">{name}</h3>
            <p className="px-3">{description}</p>
            <h4 className="px-3 ">${price}</h4>
            <Link to={`/product/${_id}`}>
                <button className="btn mx-3">Buy Now</button>
            </Link>
        </div>
    );
}

export default Product;