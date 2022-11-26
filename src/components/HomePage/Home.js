import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';
import ExtraSection from './ExtraSection';
import ProductCategories from './ProductCategories';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <ExtraSection></ExtraSection>
            <Advertise></Advertise>
            
        </div>
    );
};

export default Home;