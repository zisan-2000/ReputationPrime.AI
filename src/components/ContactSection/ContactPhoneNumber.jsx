// ContactPhoneNumber.js
import React from "react";

const ContactPhoneNumber = ({
  phoneText,
  phoneNumber,
  phoneTextColor,
  phoneNumberColor,
}) => {
  return (
    <p className={`mb-4 ${phoneTextColor}`}>
      {phoneText}{" "}
      <a
        href={`tel:${phoneNumber}`}
        className={`font-bold ${phoneNumberColor}`}
      >
        {phoneNumber}
      </a>
    </p>
  );
};

export default ContactPhoneNumber;
