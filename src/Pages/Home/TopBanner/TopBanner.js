import React from 'react';
import { Carousel } from 'react-bootstrap';
import './TopBanner.css';
const TopBanner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                {/* Slide One  */}
                <img
                style={{height:'80vh',objectFit:'cover'}}
                className="d-block w-100"
                src="https://stormsend1.djicdn.com/stormsend/uploads/615560dc00876b566205242f51123fd4.jpg"
                alt="DJI MAVIC 3"
                />
                <Carousel.Caption>
                <h2 className='animate__animated animate__fadeInDownBig'>DJI MAVIC 3</h2>
                <h5 className='animate__animated animate__fadeInDown' >Imagine Above Everything</h5>
                <h6 className='animate__animated animate__fadeInUp' >Flagship camera drone</h6>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{height:'80vh',objectFit:'cover'}}
                className="d-block w-100"
                src="https://stormsend1.djicdn.com/stormsend/uploads/105fb04570ba85aea601890f847b9c88.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h2 className='animate__animated animate__fadeInDownBig'>DJI OM 5</h2>
                <h5 className='animate__animated animate__fadeInDown'>Master Every Shot</h5>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{height:'80vh',objectFit:'cover'}}
                className="d-block w-100"
                src="https://stormsend1.djicdn.com/stormsend/uploads/9b8cf0a423d0ce2d7d4362999f044084.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h2 className='animate__animated animate__fadeInDownBig'>DJI ACTION 2</h2>
                <h5  className='animate__animated animate__fadeInDown' >More Then Action</h5>
                <h6 className='animate__animated animate__fadeInUp' >The Magnetic & Wearable Action Camera</h6>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default TopBanner;