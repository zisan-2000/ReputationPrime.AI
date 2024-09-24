// SolutionsSectionWrapper.js
import React from "react";

const SolutionsSectionWrapper = ({ children, backgroundColor }) => {
  return (
    <section className={`py-12 ${backgroundColor}`}>
      <div className="solutions-section">{children}</div>
    </section>
  );
};

export default SolutionsSectionWrapper;
