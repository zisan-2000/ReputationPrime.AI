// ContactButton.js
import React from "react";

const ContactButton = ({
  buttonText,
  buttonColor,
  buttonTextColor,
  buttonHover,
}) => {
  return (
    <button
      className={`rounded-lg px-6 py-2 ${buttonColor} ${buttonTextColor} ${buttonHover}`}
    >
      {buttonText}
    </button>
  );
};

export default ContactButton;
