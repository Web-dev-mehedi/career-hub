import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GrLocation } from 'react-icons/gr';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

const Job = ({job}) => {

    const {logo,job_title,company_name,remote_or_onsite,location,job_type,salary}= job;

    return (
        <div className='space-y-7 border border-[#E8E8E8] rounded-lg p-10'>
             <figure className='w-40'>
                <img src={logo} alt="logo" className='w-full object-cover' />
             </figure>
             {/*  */}
             <div className='space-y-2 text-left'>
                <h2 className='text-[#474747] font-extrabold capitalize text-2xl'>{job_title}</h2>
                <p className='text-xl font-semibold text-[#757575]'>{company_name}</p>
             </div>
             {/*  */}
             <div className='text-left space-x-5'>
                <span className='text-[#9873FF] border border-[#9873FF] px-5 py-3 rounded font-semibold'>{remote_or_onsite}</span>
                <span className='text-[#9873FF] border border-[#9873FF] px-5 py-3 rounded font-semibold'>{job_type}</span>
             </div>
             {/*  */}
             <div className='flex justify-start items-center gap-6 text-left '>
                <span className='text-xl font-semibold text-[#757575] flex justify-start items-center gap-2'><span><GrLocation/></span><span>{location}</span></span>
                <span className='text-xl font-semibold text-[#757575] flex justify-start items-center gap-2'><span><RiMoneyDollarCircleLine/></span> <span>Salary : {salary}</span></span>
                  
             </div>
             {/*  */}
             <Link className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-7  text-white font-bold '>View Details</Link>
        </div>
    );
};

Job.propTypes = {
    
};

export default Job;