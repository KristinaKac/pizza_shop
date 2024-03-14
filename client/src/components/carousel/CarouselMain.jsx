import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import main5 from '../../static/main5.jpg';
import main4 from '../../static/main4.jpg';
import main6 from '../../static/main6.jpg';

const CarouselMain = () => {

    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: '400px', objectFit: 'cover'}}
                        src={main4}
                        alt="First slide"
                    />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: '400px', objectFit: 'cover' }}
                    src={main5}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: '400px', objectFit: 'cover' }}
                    src={main6}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
export default CarouselMain;