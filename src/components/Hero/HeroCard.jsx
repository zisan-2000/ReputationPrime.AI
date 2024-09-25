import React from "react";

const HeroCard = ({ type, icon, border, styles }) => {
  return (
    <div
      className={`hero-card ${border ? styles.borderColor : ""} ${
        styles.cardBackgroundColor
      } ${styles.cardTextColor} ${
        styles.cardHoverShadow
      } rounded-lg p-4 text-center`}
    >
      {/* Render the icon dynamically */}
      <div className="mb-2">{icon}</div>
      <span className="hero-card-title mt-2 block text-lg font-semibold">
        {type}
      </span>
    </div>
  );
};

export default HeroCard;
