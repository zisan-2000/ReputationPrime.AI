// OverallRating.js
import React from "react";
import { FaStar } from "react-icons/fa"; // Import the star icon

const OverallRating = ({ rating, totalReviews, ratingColor }) => {
  return (
    <div className="mb-4  items-center justify-center">
      <div className="flex items-center justify-center">
        {Array(5)
          .fill()
          .map((_, i) => (
            <FaStar key={i} className="mr-1  text-green-600" />
          ))}
      </div>
      <p className={`ml-2 ${ratingColor}`}>
        Rated {rating} / 5 based on {totalReviews} reviews on Trustpilot
      </p>
    </div>
  );
};

export default OverallRating;
