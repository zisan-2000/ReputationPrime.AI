// ContactIcon.js
import React from "react";

const ContactIcon = ({ icon, iconColor }) => {
  return (
    <div className="mb-4 flex justify-center">
      <div className={`text-6xl ${iconColor}`}>{icon}</div>
    </div>
  );
};

export default ContactIcon;
