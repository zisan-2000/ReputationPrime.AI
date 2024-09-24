// SolutionsContainer.js
import React from "react";
import SolutionsCategory from "./SolutionsCategory"; // Import the SolutionsCategory component

const SolutionsContainer = ({ solutions }) => {
  return (
    <div className="flex flex-col gap-16 md:flex-row md:justify-center">
      <SolutionsCategory category={solutions.business} />
      <SolutionsCategory category={solutions.individual} />
    </div>
  );
};

export default SolutionsContainer;
