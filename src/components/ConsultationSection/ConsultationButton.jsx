// ConsultationButton.js
import React from "react";

const ConsultationButton = ({ buttonText }) => {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-green-600 px-6 py-2 text-green-600 transition-colors duration-300 hover:bg-green-600 hover:text-white">
      {buttonText}
    </button>
  );
};

export default ConsultationButton;
