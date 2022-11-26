import React from 'react';
import Banner from './Banner';
import ExtraSection from './ExtraSection';
import ProductCategories from './ProductCategories';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <ExtraSection></ExtraSection>
            
        </div>
    );
};

export default Home;