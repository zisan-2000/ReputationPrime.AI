// FooterLogo.js
import React from "react";

const FooterLogo = ({ logo, contactInfo, linkColor }) => {
  return (
    <div className="footer-top mb-8 flex flex-col items-center justify-between md:flex-row">
      <div className="footer-logo mb-6 text-center md:mb-0 md:text-left">
        <h2 className="text-3xl font-bold">
          {logo.part1}
          <span className="text-green-500">{logo.part2}</span>
        </h2>
        <p className="mt-2 text-sm">{logo.tagline}</p>
      </div>
      <div className="footer-contact text-center md:text-right">
        <p>{contactInfo.address}</p>
        <p>
          Phone:{" "}
          <a href={`tel:${contactInfo.phone}`} className={linkColor}>
            {contactInfo.phone}
          </a>
        </p>
        <p>ID#: {contactInfo.license}</p>
      </div>
    </div>
  );
};

export default FooterLogo;
