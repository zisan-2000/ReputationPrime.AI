// ReviewSection.js
import React from "react";
import OverallRating from "./OverallRating";
import ReviewList from "./ReviewList";
import SectionTitle from "./SectionTitle";

const ReviewSection = ({ title, rating, totalReviews, reviews, styles }) => {
  return (
    <section className={`review-section py-12 ${styles.backgroundColor}`}>
      <div className="container mx-auto px-4 text-center md:px-8 lg:px-16">
        {/* Section Title */}
        <SectionTitle title={title} titleColor={styles.titleColor} />

        {/* Overall Rating */}
        <OverallRating
          rating={rating}
          totalReviews={totalReviews}
          ratingColor={styles.ratingColor}
        />

        {/* Review Cards */}
        <ReviewList reviews={reviews} />
      </div>
    </section>
  );
};

export default ReviewSection;
