import axios from "axios";
import React, { useEffect, useState } from "react";
import './ManageOrder.css'

const ManageOrder = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://sheltered-peak-41800.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products])

    const handleApprove = data => {
        data.status = "shipped";
        if (data.email) {
            fetch(`https://sheltered-peak-41800.herokuapp.com/orders/${data._id}`, {
                method: "PUT",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(data)
            }).then(res => res.json()).then(data => {
                alert("Shipped your Order")
            })
        }
    }

    const handleDelete = (id) => {
        const url = `https://sheltered-peak-41800.herokuapp.com/orders/${id}`
        const ans = window.confirm('Do you want to delete it?')
        if (ans) {
            axios
                .delete(url)
                .then(data => {
                    // console.log(data)
                    if (data.acknowledged) {
                        alert('Deleted')
                        const remaining = products.filter(product => product._id !== id)
                        setProducts(remaining)
                    }
                })
        }
    }
    return (
        <div>
            <h2 className="fw-bold mt-3 text-primary">--Manage Orders--</h2>
            {
                products.map(product => <div key={product._id}>

                    <div className=" banner my-order d-flex flex-column justify-content-between m-4 px-4 py-3 border-2 border-primary rounded-pill w-75 mx-auto">
                        <h3 className="fw-bold order-name" style={{ display: "inline" }}>{product.name}</h3>
                        <div className="manage-status" style={{ textDecoration: "underline" }}>
                            <h5>{product.status}</h5>
                        </div>
                        <div className="d-md-flex justify-content-center">
                            <div>
                                &emsp;<button className="btn border-0 me-0" onClick={() => handleApprove(product)}>Update Status</button>&emsp;
                            </div>
                            <div>
                                <button className="ms-0 btn border-0" style={{ backgroundColor: "rgba(245, 222, 179, 0.541)s" }} onClick={() => handleDelete(product._id)}>Delete Order</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageOrder;
