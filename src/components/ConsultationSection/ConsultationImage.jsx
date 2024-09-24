// ConsultationImage.js
import React from "react";

const ConsultationImage = ({ imageSrc }) => {
  return (
    <div className="flex justify-center md:w-1/2 md:justify-end">
      <img
        src={imageSrc}
        alt="Consultation Illustration"
        className="w-full max-w-xs md:max-w-md"
      />
    </div>
  );
};

export default ConsultationImage;
