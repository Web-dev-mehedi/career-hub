import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';

const JobCategory = props => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h1>hello form category</h1>
        </div>
    );
};

JobCategory.propTypes = {
    
};

export default JobCategory;