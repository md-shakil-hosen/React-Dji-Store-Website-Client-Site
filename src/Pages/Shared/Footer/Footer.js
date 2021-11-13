import 'animate.css';
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div>

      <div className="bg-custom text-light text-start pt-5 cusFooter">
        <Container>
          <Row xs={1} md={2} lg={4}>
            <Col>
              <div className="footer-img animate__animated animate__fadeInDown">
                <img src="https://stormsend1.djicdn.com/stormsend/uploads/d0425c20-9482-0136-3d9f-12528100fbe3/logo.svg" alt="" />
              </div>
              <h5 className='footer-p text-dark mt-2 mb-3 animate__animated animate__fadeInDown'>A Camera for Capturing the Best
                The 4/3 CMOS Hasselblad camera can effectively suppress noise in low-light environments, delivering higher resolution and dynamic range.</h5>
              <div>
                <a href="/"><i class="fab fa-facebook-square fs-5 ms-2"></i></a>
                <a href="/"><i class="fab fa-twitter-square fs-5 ms-2"></i></a>
                <a href="/"><i class="fab fa-google-plus-square fs-5 ms-2"></i></a>
                <a href="/"><i class="fab fa-linkedin fs-5 ms-2"></i></a>
              </div>
            </Col>
            <Col>
              {/* Destination Section  */}
              <h6 className="footer-title mt-2 animate__animated animate__fadeInDown">Product Categories</h6>
              <ul className=" quick-link d-block p-0 m-0 animate__animated animate__fadeInDown">
                <li>
                  <a href="/">Mavic</a>
                </li>
                <li>
                  <a href="/">Osmo</a>
                </li>
                <li>
                  <a href="/">DJI FPV</a>
                </li>
                <li>
                  <a href="/">Phantom</a>
                </li>
              </ul>
            </Col>
            <Col>
              {/* Information Section  */}
              <h6 className="footer-title mt-2 animate__animated animate__fadeInDown">Programs</h6>
              <ul className=" quick-link d-block p-0 m-0 animate__animated animate__fadeInDown">
                <li>
                  <a href="/">DJI Credit</a></li>
                <li>
                  <a href="/">Refurbished Products</a></li>
                <li>
                  <a href="/">DJI Store APP</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h6 className="footer-title mt-2 animate__animated animate__fadeInDown">Explore</h6>
              <ul className=" quick-link d-block p-0 m-0 animate__animated animate__fadeInDown">
                <li>
                  <a href="/">SkyPixel</a>
                </li>
                <li>
                  <a href="/">DJI Forum</a>
                </li>
                <li>
                  <a href="/">Buying Guides</a>
                </li>
                <li>
                  <a href="/">DJI Flying Tips</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
        {/* Copyright  */}
        <hr className="fw-5" />
        <p className="p-0 m-0 text-center text-dark mb-2 animate__animated animate__fadeInDown">Alright reserved by Shakil Mahmud</p>
      </div>
    </div>
  );
};

export default Footer;
