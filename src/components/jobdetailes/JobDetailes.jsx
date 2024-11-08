import React, { useContext, useEffect, useState } from 'react';
import PropTypes, { number } from 'prop-types';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { DataContext } from '../../contextApi/DataContext';

const JobDetailes = () => {
    const {cardId} = useContext(DataContext);
    const data = useLoaderData();
    const {id} = useParams();
    const [details, setDetails] = useState([]);
   const {logo,job_title,company_name,contact_information,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences} = details || {};
     const {phone,email,address} = contact_information || {}
    useEffect(()=>{
        const obj = data.find(item=> item.id === Number(id));
        setDetails(obj)
      
    },[data,cardId])

    return (
        <div className='py-20'>
                    <div className='w-11/12 mx-auto bg-slate-100 p-8 rounded-2xl space-y-4'>
                         <img src={logo} alt="" />
                         <p><strong>Job title : </strong>{job_title}</p>
                         <p><strong>Company name: </strong>{company_name}</p>
                         <p> <strong>Remote or Onsite : </strong>{remote_or_onsite}</p>
                         <p> <strong>Location : </strong>{location}</p>
                         <p><strong>Job type : </strong>{job_type}</p>
                         <p> <strong>Salary : </strong> {salary}</p>
                         <p> <strong>Job description : </strong> {job_description}</p>
                         <p><strong>Responsibility : </strong> {job_responsibility}</p>
                         <p><strong>Salary : </strong> {educational_requirements}</p>
                         <p> <strong>Experiences : </strong> {experiences}</p>
                           <div className='flex gap-5 flex-wrap'>
                           <p> <strong>Phone : </strong> {phone}</p>
                          <p> <strong>Email : </strong> {email}</p>
                          <p> <strong>Address : </strong> {address}</p>
                           </div>

                          <div>
                               <Link className='bg-slate-300 px-8 py-3 rounded-full inline-block font-semibold'>Apply now</Link>
                          </div>
                    </div>
            
        </div>
    );
};

JobDetailes.propTypes = {
    
};

export default JobDetailes;