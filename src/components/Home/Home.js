import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import GreatThing from '../GreatThing/GreatThing';
import Navbar from '../Navbar/Navbar';
import RecentProject from '../RecentProject/RecentProject';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <GreatThing></GreatThing>
            <RecentProject/>
        </div>
    );
};

export default Home;