import React from 'react';
import PropTypes from 'prop-types';
import HeroTitle from '../herotitle/HeroTitle';

const Blogs = props => {
    return (
        <div>
            <h1>hello form blogs</h1>
            <HeroTitle heroTitle={"blogs"} heroSubtitle={'all bolgs are here'}/>
        </div>
    );
};

Blogs.propTypes = {
    
};

export default Blogs;