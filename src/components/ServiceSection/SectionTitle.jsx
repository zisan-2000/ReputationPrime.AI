// SectionTitle.js
import React from "react";

const SectionTitle = ({ title, titleColor }) => {
  return <h2 className={`mb-6 text-3xl font-bold ${titleColor}`}>{title}</h2>;
};

export default SectionTitle;
