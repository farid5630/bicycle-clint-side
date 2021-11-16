import React from 'react';
// import AddService from '../../Dashboard/AddService/AddService';
// import Services from '../../Services/Services/Services';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import HomeService from '../HomeService/HomeService';
import Reviews from '../Reviews/Reviews';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <HomeService></HomeService>
            <Reviews></Reviews>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;