import React from "react";
import { Helmet } from "react-helmet-async";

const AllClasses = () => {
  return (
    <div>
      <Helmet>
        <title>SkillForge | All Classes</title>
      </Helmet>
      <h2 className="text-2xl">This is all class</h2>
    </div>
  );
};

export default AllClasses;
