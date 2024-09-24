import React from "react";

const HeroButton = ({ buttonLabel, styles, onClick }) => {
  return (
    <button
      className={`hero-next-button ${styles.buttonColor} ${styles.buttonTextColor}`}
      onClick={onClick}
    >
      {buttonLabel}
    </button>
  );
};

export default HeroButton;
