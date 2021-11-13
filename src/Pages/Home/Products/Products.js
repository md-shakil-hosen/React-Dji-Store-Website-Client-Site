
import 'animate.css';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://infinite-temple-12624.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className="py-5">
            <Container>
                <div className="w-100 mx-auto">
                <h3 className="text-center animate__animated animate__fadeInDown">DJI Action Camera </h3>
                <p className="text-center animate__animated animate__fadeInDown">More Then Action and Flying the Sky</p>
                </div>
                {
                    products.length ? <Row xs={1} md={4} className="g-4">
                    {
                        products.slice(0,8).map(product => <Col key={product?._id}>
                            <Card className='card animate__animated animate__fadeInDown'>
                                <Card.Img style={{height:'250px'}} variant="top" src={product?.img}/>
                                <div className="p-3">
                                <div className="d-flex align-items-center justify-content-between ">
                                    <Card.Title className='text-center' >{product?.productName}</Card.Title>
                                </div>
                                <p className="p-0 m-0">{product?.des}</p>
                                <div>
                                    <h5>${product?.price}</h5>
                                    <Link to={`/purchase/${product._id}`}>
                                        <Button> Buy Now</Button>
                                    </Link>
                                </div>
                                </div>
                            </Card>
                            </Col>)
                    }
                </Row> : <h2>Loading...</h2>
                }
            </Container>
        </div>
    );
};

export default Products;