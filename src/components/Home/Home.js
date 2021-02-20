import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import GreatThing from '../GreatThing/GreatThing';
import Navbar from '../Navbar/Navbar';
import RecentProject from '../RecentProject/RecentProject';
import WorkingProcess from '../WorkingProcess/WorkingProcess';
import Testimonials from '../Testimonials/Testimonials';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <GreatThing></GreatThing>
            <RecentProject/>
            <WorkingProcess/>
            <Testimonials />
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;