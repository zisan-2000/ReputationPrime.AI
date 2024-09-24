import React from "react";

const ViewAllButton = ({
  buttonLabel,
  buttonColor,
  buttonTextColor,
  buttonHover,
}) => {
  return (
    <button
      className={`rounded-lg px-6 py-2 ${buttonColor} ${buttonTextColor} ${buttonHover} transform transition duration-300 hover:scale-105`}
    >
      {buttonLabel}
    </button>
  );
};

export default ViewAllButton;
