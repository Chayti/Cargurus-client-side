import React from "react";
import useProducts from '../../hooks/useProducts';
import './Products.css';
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { Row } from "react-bootstrap";
import Product from "../Product/Product";

const Products = () => {
    const [products] = useProducts();

    return (
        <>
            <Header></Header>
            <div id="products">
                <h1 className="mt-3">Our Cars</h1>
                <div className="product-container">
                    <Row xs={1} md={3}>
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                            ></Product>)
                        }
                    </Row>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Products;