import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './../components/Shared/Header';
import Footer from './../components/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;