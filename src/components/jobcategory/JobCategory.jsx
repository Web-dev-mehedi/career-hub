import React from "react";
import PropTypes from "prop-types";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import HeroTitle from "../herotitle/HeroTitle";

const JobCategory = ({handleDetails}) => {
  const categories = useLoaderData();
  return (
    <div className="py-10 md:py-20">
      <HeroTitle
        heroTitle={"Job Category List"}
        heroSubtitle={
          "Explore thousands of job opportunities with all the information you need. Its your future"
        }
      />
      {/*map from category json  */}
      <div className="flex justify-center items-center gap-8 flex-wrap">
        {categories.map((item) => (
          <div
            key={item.id}
            className="p-4 space-y-6 border border-[#a2a2a24a] rounded-lg bg-[#9873ff17] cursor-pointer"
          >
             <figure className="bg-[#a7a7a717] w-12 h-12 p-2 rounded-lg ">
               <img src={item.logo} alt="" />
             </figure>
             <div className="space-y-2">
                <Link className="text-xl font-extrabold text-[#474747]" to="/cate">{item.category_name}</Link>
                <p className="text-[#474747] text-base font-medium">{item.availability}</p>
             </div>
          </div>
        ))}
      </div>
      {/*  */}
      <Outlet handleDetails={handleDetails} />
    </div>
  );
};

JobCategory.propTypes = {};

export default JobCategory;
