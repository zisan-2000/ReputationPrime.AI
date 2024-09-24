// ReviewContent.js
import React from "react";

const ReviewContent = ({ title, content }) => {
  return (
    <>
      <h4 className="mb-2 font-semibold">{title}</h4>
      <p className="mb-4 text-gray-700">{content}</p>
    </>
  );
};

export default ReviewContent;
