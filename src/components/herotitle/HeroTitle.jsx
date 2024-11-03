import React from 'react';

const HeroTitle = ({heroTitle,heroSubtitle}) => {

    return (
        <div className='text-center space-y-4 py-8'>
             <h1 className='text-5xl font-extrabold text-[#1A1919] capitalize'>{heroTitle}</h1>
             <p className='text-base font-medium text-[#757575]'>{heroSubtitle}</p>
             
        </div>
    );
};

export default HeroTitle;