import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';

const JobDetailes = props => {

    const data = useLoaderData();


    return (
        <div>
            <h1>hello from job details{data.length}</h1>
           {/* { data.map((item)=>(
                
            ))
            } */}
        </div>
    );
};

JobDetailes.propTypes = {
    
};

export default JobDetailes;