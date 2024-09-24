import React from "react";

const FAQTitle = ({ title, titleColor }) => {
  return (
    <h2
      className={`mb-4 text-2xl font-bold ${titleColor} transform transition duration-300 hover:scale-105`}
    >
      {title}
    </h2>
  );
};

export default FAQTitle;
