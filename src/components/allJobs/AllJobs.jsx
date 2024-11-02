import React, { useState } from "react";
import PropTypes from "prop-types";
import Job from "../job/Job";
import { Link } from "react-router-dom";

const AllJobs = ({ data }) => {
  const [newData, setData] = useState(data.slice(0, 4));

  const handleSeeAll = () => {
    setData(data);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        {newData.map((item) => (
          <Job key={item.id} job={item} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          onClick={handleSeeAll}
          className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-7  text-white font-semibold"
        >
          {" "}
          See All Jobs
        </Link>
      </div>
    </div>
  );
};

AllJobs.propTypes = {};

export default AllJobs;
