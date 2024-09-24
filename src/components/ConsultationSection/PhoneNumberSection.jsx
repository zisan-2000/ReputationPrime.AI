// PhoneNumberSection.js
import React from "react";
import { FaPhoneAlt } from "react-icons/fa"; // Importing the phone icon

const PhoneNumberSection = ({ phoneNumber }) => {
  return (
    <div className="mb-4 md:mb-0 md:mr-4">
      <p className="mb-2 font-semibold">Speak to a Reputation Analyst</p>
      <a
        href={`tel:${phoneNumber}`}
        className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-2 text-white transition-colors duration-300 hover:bg-green-700"
      >
        <FaPhoneAlt className="mr-2" /> {phoneNumber}
      </a>
    </div>
  );
};

export default PhoneNumberSection;
