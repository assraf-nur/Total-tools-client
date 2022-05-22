import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import FeatureTools from './FeatureTools';
import ToolsList from './ToolsList';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToolsList></ToolsList>
            <BusinessSummery></BusinessSummery>
            <FeatureTools></FeatureTools>
            <Footer></Footer>
        </div>
    );
};

export default Home;