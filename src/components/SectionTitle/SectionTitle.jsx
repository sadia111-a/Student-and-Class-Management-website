import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-1/2 md:w-2/5 mx-auto text-center my-8">
      <p className="text-[#D99904] italic text-xl mb-2">---{subHeading}---</p>
      <h3 className="text-2xl lg:text-4xl uppercase font-bold border-y-4 py-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
