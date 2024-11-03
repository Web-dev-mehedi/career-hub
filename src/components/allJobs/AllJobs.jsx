import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useLoaderData } from "react-router-dom";
import HeroTitle from "../herotitle/HeroTitle";
import Job from "../job/Job";


const JobCategory = ({handleDetails}) => {
  const data = useLoaderData();
  console.log(data);
  const [newData,setNewData] = useState(data.slice(0,4));
  const[active,setActive] = useState(true);
  const handleSlice=()=>{
       setNewData(data);
       setActive(false)
  }
  // 
  return (
    <div className="pt-14 md:pt-20">
      <HeroTitle
        heroTitle={"Featured Jobs"}
        heroSubtitle={
          "Explore thousands of job opportunities with all the information you need. Its your future"
        }
      />
      <div className="grid md:grid-cols-2 gap-6">
        {
        newData.map((item) => (
            <div>
                     <Job key={item.id} job={item} handleDetails={handleDetails}></Job>
                   
            </div>
        ))
        }
        {/*  */}
      </div>
      <div className="text-center mt-8">
        <Link
           onClick={handleSlice}
          className={`${active ? "" : "hidden"} btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-7  text-white font-semibold`}
        >
          {" "}
          See All Jobs
        </Link>
      </div>
    </div>
  );
};

JobCategory.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default JobCategory;
