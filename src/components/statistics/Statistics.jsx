import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';



const Statistics = ({handleDetails}) => {
   
    return (
        <div>
            {/*  */}
            {/*nested outlet */}
             <Outlet handleDetails={handleDetails}/>
             
             {/* <button onClick={handleDetails} className='btn'>btn</button> */}
        
        </div>
    );
};

export default Statistics;