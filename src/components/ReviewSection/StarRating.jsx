// StarRating.js
import React from "react";
import { FaStar } from "react-icons/fa"; // Import the star icon

const StarRating = ({ rating }) => {
  return (
    <div className="mb-2 flex items-center">
      {Array(rating)
        .fill()
        .map((_, i) => (
          <FaStar key={i} className="mr-1 text-green-600" />
        ))}
    </div>
  );
};

export default StarRating;
