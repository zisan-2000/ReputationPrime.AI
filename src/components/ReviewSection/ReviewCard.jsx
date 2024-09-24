// ReviewCard.js
import React from "react";
import CompanyReply from "./CompanyReply";
import ReadMoreLink from "./ReadMoreLink";
import ReviewContent from "./ReviewContent";
import ReviewerDetails from "./ReviewerDetails";
import StarRating from "./StarRating";

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card mb-4 rounded-lg bg-white p-4 shadow-md">
      {/* Star Rating */}
      <div className="flex justify-center">
        <StarRating rating={review.rating} />
      </div>

      {/* Reviewer Details */}
      <ReviewerDetails name={review.name} date={review.date} />

      {/* Review Content */}
      <ReviewContent title={review.title} content={review.content} />

      {/* Reply from Company */}
      {review.reply && (
        <CompanyReply reply={review.reply} replyDate={review.replyDate} />
      )}

      {/* Read More Link */}
      <ReadMoreLink />
    </div>
  );
};

export default ReviewCard;
