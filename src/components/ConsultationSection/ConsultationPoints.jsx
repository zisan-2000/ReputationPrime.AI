// ConsultationPoints.js
import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Importing the check icon

const ConsultationPoints = ({ points, pointColor }) => {
  return (
    <ul className="mb-6">
      {points.map((point, index) => (
        <li key={index} className="mb-2 flex items-center">
          <FaCheckCircle className="mr-2 text-green-600" />
          <span className={pointColor}>{point}</span>
        </li>
      ))}
    </ul>
  );
};

export default ConsultationPoints;
