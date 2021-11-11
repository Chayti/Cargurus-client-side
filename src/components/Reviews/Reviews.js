import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Rating from 'react-rating';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://sheltered-peak-41800.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [reviews])

    return (
        <div className="text-center my-5 reviews">
            <h2 className="mb-4">Reviews from our honourable Customers</h2>
            <Carousel fade>
                {
                    reviews.map(review =>
                        <Carousel.Item className="d-flex justify-content-center banner" key={review._id}>
                            <div className="product py-4 carousel-width front-bg">
                                <h3 className="px-3 text-light fw-bold">{review.name}</h3>
                                <h6 className="px-3 text-light">{review.email}</h6>
                                <div className="bg-warning">
                                    <Rating
                                        emptySymbol="far fa-star fa-1x"
                                        fullSymbol="fas fa-star fa-1x"
                                        initialRating={review.rating}
                                        readonly
                                    />
                                </div>
                                <h5 className="px-3 mt-1 text-light">{review.comments}</h5>
                            </div>
                        </Carousel.Item>
                    )
                }

            </Carousel>
        </div>
    );
}

export default Reviews;