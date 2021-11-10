import React from 'react';
import './Home.css';
import MyCarousel from '../Carousel/Carousel';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Product from '../Product/Product';
import { Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';

const Home = () => {
    const [products] = useProducts();

    return (
        <>
            <Header></Header>
            <div className="section-1 d-flex justify-content-between align-items-end">
                <div className="front-bg w-100">
                    <h2>CarGurus - Automotive Marketplace</h2>
                    <h4>Find your next car with us</h4>
                </div>
            </div>

            <div className="section-2 box">

                <div>
                    <h1>Safe Journey! Be happy !! Lead a relaxed life!!!</h1>
                    <br />
                    <h2>CarGurus is always present here to help have a best driving experience. Buy car from here with a resonable price to give the best gift to your family.</h2>
                </div>

            </div>

            <MyCarousel></MyCarousel>

            <div id="products">
                <h1 className="mt-3">Our Cars</h1>
                <div className="product-container">
                    <Row xs={1} md={3}>
                        {
                            products.slice(0, 6).map(product => <Product
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

export default Home;