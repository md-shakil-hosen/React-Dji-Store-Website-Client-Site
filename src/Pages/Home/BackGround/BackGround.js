import 'animate.css';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './BackGround.css';

const BackGround = () => {
    return (
        <div className="w-100 mt-5 mb-5">
            <Container>
            <Row>
            <Col xs={6}>
            <Card className="bg-dark text-white text-center border-0 animate__animated animate__slideInLeft ">
            <Card.Img src="https://stormsend1.djicdn.com/stormsend/uploads/c38e931a9188933df9a0fbb5893a5599.jpg" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title className='text-dark animate__animated animate__fadeInDown'>DJI Care Refresh+ <br />
                      DJI Store Exclusive | Protect Your Gear</Card.Title>
            </Card.ImgOverlay>
            </Card>
            </Col>
            <Col xs={6}>
            <Card className="bg-dark text-white text-center border-0 animate__animated animate__fadeInDown">
            <Card.Img src="https://stormsend1.djicdn.com/stormsend/uploads/703592371793c6dd9dfbf8ebbca18f1d.jpg" alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title className='text-dark'>DJI Credit
                Get 1% of the total purchase value</Card.Title>
            </Card.ImgOverlay>
            </Card>
            </Col>
           </Row>
           <br />
           <br />
           <br />
           <div>
               {/* ----------------------------------Buying Guide ---------------------------- */}
               <h2 className='text-center mb-4 animate__animated animate__fadeInDown
               '>Drone Buying Guide </h2>
           <Row xs={1} md={3} className="g-4">
                    <Col>
                    <Card>
                        <Card.Img variant="top"  src="https://store-guides2.djicdn.com/guides/wp-content/uploads/2017/08/mavic-2-16-1-696x473.jpg" />
                        <Card.Body>
                        <Card.Title> <a href="/">8 Crucial Things to Know Before Buying a Drone For Photography</a> </Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img variant="top"  src="https://store-guides2.djicdn.com/guides/wp-content/uploads/2017/09/B242A654-7717-387B-FA99-7AE34F440559-696x392.jpg" />
                        <Card.Body>
                        <Card.Title> <a href="/">8 Reasons to Buy a Drone , Drone Laws and Regulations: Drone Laws and Regulations buying this camera</a> </Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img variant="top"  src="https://store-guides2.djicdn.com/guides/wp-content/uploads/2017/09/mavic-pro-e1542066744213-696x465.jpeg" />
                        <Card.Body>
                        <Card.Title> <a href="/">Don’t Buy DJI On The Grey Market, Drone Laws and Regulations: </a> </Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Img variant="top"  src="https://store-guides2.djicdn.com/guides/wp-content/uploads/2017/10/Drone-laws-696x332.jpg" />
                        <Card.Body>
                        <Card.Title> <a href="/">Drone Laws and Regulations: Read Now to Avoid Big Fines and Legal Woes  Drone Laws and Regulations: </a> </Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
           </div>
            </Container>

        </div>
    );
};

export default BackGround;