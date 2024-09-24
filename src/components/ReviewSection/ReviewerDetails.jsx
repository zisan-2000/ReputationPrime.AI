// ReviewerDetails.js
import React from "react";

const ReviewerDetails = ({ name, date }) => {
  return (
    <p className="mb-1 text-sm text-gray-600">
      {name}, {date}
    </p>
  );
};

export default ReviewerDetails;
