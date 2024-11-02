import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = props => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h1>hello from applied jobs</h1>
        </div>
    );
};

AppliedJobs.propTypes = {
    
};

export default AppliedJobs;