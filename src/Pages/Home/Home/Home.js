import React from 'react';
import Banner from '../Banner/Banner';
import Donation from '../Donation/Donation';
import PhotographerDetails from '../PhotographerDetails/PhotographerDetails';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhotographerDetails></PhotographerDetails>
            <Services></Services>
            <Donation></Donation>
        </div>
    );
};

export default Home;