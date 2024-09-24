// SolutionsSection.js
import React from "react";
import SolutionsContainer from "./SolutionsContainer";
import SolutionsSectionWrapper from "./SolutionsSectionWrapper";

const SolutionsSection = ({ solutions }) => {
  return (
    <SolutionsSectionWrapper backgroundColor={solutions.backgroundColor}>
      <SolutionsContainer solutions={solutions} />
    </SolutionsSectionWrapper>
  );
};

export default SolutionsSection;
