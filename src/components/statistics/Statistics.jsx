import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCategory from '../jobcategory/JobCategory';
import AllJobs from '../allJobs/AllJobs';

const Statistics = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h2>hello form statistic</h2>
            {/*  */}
            <JobCategory/>
            {/*  */}
            <AllJobs data={data}/>
        </div>
    );
};

export default Statistics;