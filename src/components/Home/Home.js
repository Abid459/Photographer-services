import React from 'react';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='home'>
            <div className="brand">Wild View</div>
            <Banner></Banner>
            <Services></Services>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;