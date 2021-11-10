import React from "react";
import { Carousel } from "react-bootstrap";
import './Carousel.css';
import carousel_1 from '../../images/carousel0.png';
import carousel_2 from '../../images/carousel1.png';
import carousel_3 from '../../images/carousel2.png';

const MyCarousel = () => {
    return (
        <div>
            <Carousel fade className="text-center">

                <Carousel.Item>
                    <img className="w-100 " src={carousel_1} alt="..." />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="w-100" src={carousel_2} alt="..." />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="w-100" src={carousel_3} alt="..." />
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default MyCarousel;