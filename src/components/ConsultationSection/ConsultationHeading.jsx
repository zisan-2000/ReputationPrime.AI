// ConsultationHeading.js
import React from "react";

const ConsultationHeading = ({ heading, headingColor }) => {
  return (
    <h2 className={`mb-4 text-2xl font-bold ${headingColor}`}>{heading}</h2>
  );
};

export default ConsultationHeading;
