import React from 'react';
import Reviews from '../Reviews/Reviews';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import BackGround from './BackGround/BackGround';
import Products from './Products/Products';
import TopBanner from './TopBanner/TopBanner';
const Home = () => {
    return (
        <div style={{backgroundColor:'#f0f1f3'}}>
            <NavBar/>
            <TopBanner/>
            <Products/>
            <Reviews/>
            <BackGround/>
            <Footer/>
        </div>
    );
};

export default Home;