
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const NavBar = () => {

        const {user,logOut} = useAuth()
    return (
            <>
            <Navbar sticky="top" bg="light" variant="light">
                    <Container>
                    <Navbar.Brand style={{fontSize:'2rem', fontWeight:700}} className="m-0"  as={Link} to="/home">DJI STORE</Navbar.Brand>
                    <Nav className="ms-auto text-center">
                    <Nav.Link style={{background:'#f0dce3', fontWeight:'700', marginRight:'3px', borderRadius:'5px'}} as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link style={{background:'#f0dce3', fontWeight:'700', marginRight:'3px', borderRadius:'5px'}} as={Link} to="/explore">Products</Nav.Link>
                    <Nav.Link style={{background:'#f0dce3', fontWeight:'700', marginRight:'3px', borderRadius:'5px'}} as={Link} to="/review">Review</Nav.Link>
                    {
                        user?.email && <Nav.Link style={{background:'#f0dce3', fontWeight:'700', marginRight:'3px', borderRadius:'5px'}} as={Link} to="/dash">Dashboard</Nav.Link>
                    }
                    {
                            user?.email ? <Nav.Link onClick={logOut}>Log out</Nav.Link> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }                     
                    </Nav>
                    </Container>                   
            </Navbar>
            </>
    );
};

export default NavBar;