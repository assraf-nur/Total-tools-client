import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import FeatureTools from './FeatureTools';
import ReviewSection from './ReviewSection';
import ToolsList from './ToolsList';
import ToolsWish from './ToolsWish';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToolsList></ToolsList>
            <BusinessSummery></BusinessSummery>
            <ReviewSection></ReviewSection>
            <FeatureTools></FeatureTools>
            <ToolsWish></ToolsWish>
            <Footer></Footer>
        </div>
    );
};

export default Home;