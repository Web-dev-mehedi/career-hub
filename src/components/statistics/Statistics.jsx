import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import JobCategory from '../jobcategory/JobCategory';



const Statistics = () => {
   const categories = useLoaderData();
   
    return (
        <div>
            {/*  */}
            <JobCategory categories={categories}/>
            {/*nested outlet */}
             <Outlet/>
        
        </div>
    );
};

export default Statistics;