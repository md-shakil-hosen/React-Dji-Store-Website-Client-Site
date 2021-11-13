import React from 'react';
import { Button, Container } from 'react-bootstrap';
import {
    NavLink, Route, Switch, useRouteMatch
} from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import AddProduct from './AddProduct/AddProduct';
import AdminRoute from './AdminRoute/AdminRoute';
import './DashBoard.css';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageProduct from './ManageProduct/ManageProduct';
import ManegeOrder from './ManegeOrder/ManegeOrder';
import MyOrder from './MyOrder/MyOrder';
import Pay from './Pay/Pay';
import Review from './Review/Review';
const DashBord = () => {
    let { path, url } = useRouteMatch();
    const {logOut,admin} = useAuth()
    return (
        <>
        <div className="text-light w-100 py-3 border-bottom bg-light">
            <h3 className="p-0 m-0 text-center text-dark animate__animated animate__fadeInDown">DASHBOARD</h3>
        </div>
        <div>
            <Container>
                <div className="row  ">
                <div className="col-12 col-md-3 d-grid animate__animated animate__fadeInDown" style={{backgroundColor:'#f0dfdc'}}>
                <NavLink style={{textDecoration:'none'}} className="py-2" to='/home'>Home</NavLink>
                <NavLink style={{textDecoration:'none'}} className="py-2" to={`${url}`}>My Order</NavLink>
                <NavLink style={{textDecoration:'none'}} className="py-2" to={`${url}/pay`}>Pay Bill</NavLink>
                <NavLink style={{textDecoration:'none'}} className="py-2" to={`${url}/review`}>Review</NavLink>
                {
                    admin && <NavLink style={{textDecoration:'none'}} className="py-2" to={`${url}/manageAllOrder`}>Manage Order</NavLink>
                }
                {
                    admin && <NavLink style={{textDecoration:'none'}} className="py-2" to={`${url}/addProduct`}>Add Product</NavLink>
                }
                {
                    admin && <NavLink style={{textDecoration:'none'}} className="py-2" to={`${url}/makeAdmin`}>Make Admin</NavLink>
                }
                {
                    admin && <NavLink style={{textDecoration:'none'}} className="py-2" to={`${url}/manageProduct`}>Manage Products</NavLink>
                }
                <Button className='mb-3 text-dark' onClick={logOut}>Log Out</Button>
                </div>
                <div className="col-12 col-md-9">
                <Switch>
                    <Route exact path={path}>
                    <MyOrder/>
                    </Route>

                    <AdminRoute exact path={`${path}/makeAdmin`}>
                    <MakeAdmin/>
                    </AdminRoute>

                    <Route exact path={`${path}/pay`}>
                    <Pay/>
                    </Route>

                    <AdminRoute exact path={`${path}/manageAllOrder`}>
                    <ManegeOrder/>
                    </AdminRoute>

                    <Route exact path={`${path}/review`}>
                    <Review/>
                    </Route>

                    <AdminRoute exact path={`${path}/manageProduct`}>
                    <ManageProduct/>
                    </AdminRoute>

                    <AdminRoute exact path={`${path}/addProduct`}>
                    <AddProduct/>
                    </AdminRoute>
                </Switch>
                </div>
                
                </div>
            </Container>
        </div>
        <Footer/>
        </>
    );
};

export default DashBord;