// ReviewList.js
import React from "react";
import ReviewCard from "./ReviewCard"; // Import the ReviewCard component

const ReviewList = ({ reviews }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
