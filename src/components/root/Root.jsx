import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Root = () => {
    return (
        <div className='container mx-auto'>
            {/* header */}
            <Header/>
               {/* all pages */}
                <div className='min-h-screen w-11/12 mx-auto'>
                  <Outlet></Outlet>
                </div>
                {/* footer */}
            <Footer/>
        </div>
    );
};

export default Root;