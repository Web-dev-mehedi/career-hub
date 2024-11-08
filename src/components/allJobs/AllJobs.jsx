import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLoaderData, useParams } from "react-router-dom";
import HeroTitle from "../herotitle/HeroTitle";
import Job from "../job/Job";


const JobCategory = () => {
  const data = useLoaderData();
  const {category_name} = useParams()
    
  const [allData,setAllData] = useState(data.slice(0,4));
  
  const[active,setActive] = useState(true);
  const handleSlice=()=>{
    setAllData(data);
    setActive(false)
}

   useEffect(()=>{
        if(category_name){
          const newData = data.filter((item)=> item.category_name === category_name);
        setAllData(newData);
        }
       
   },[category_name,data])

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
       allData.map((item) => (
            <div>
                     <Job key={item.id} job={item} ></Job>
                   
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
