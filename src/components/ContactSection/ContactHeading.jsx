// ContactHeading.js
import React from "react";

const ContactHeading = ({ heading, headingColor }) => {
  return (
    <h3 className={`mb-2 text-xl font-bold ${headingColor}`}>{heading}</h3>
  );
};

export default ContactHeading;
