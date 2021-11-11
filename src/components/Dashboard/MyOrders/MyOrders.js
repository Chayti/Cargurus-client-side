import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [user.email, products]);

    const handleDelete = (id) => {
        const url = `http://localhost:5000/orders/${id}`
        const ans = window.confirm('Do you want to delete it?')
        if (ans) {
            axios
                .delete(url)
                .then(data => {
                    if (data.acknowledged) {
                        const remaining = products.filter(product => product._id !== id)
                        setProducts(remaining)
                    }
                })
        }
    }
    return (
        <div id="my-orders">
            <h1>My Orders</h1>
            <div className="my-order-container">
                <Row xs={1} md={3}>
                    {
                        products.map(product => <MyOrder
                            key={product.id}
                            product={product}
                            handleDelete={handleDelete}
                        ></MyOrder>)
                    }
                </Row>
            </div>
        </div>
    )
}

export default MyOrders;