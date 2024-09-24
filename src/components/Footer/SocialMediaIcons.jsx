// SocialMediaIcons.js
import React from "react";

const SocialMediaIcons = ({
  socialMedia,
  socialIconColor,
  socialIconHoverColor,
}) => {
  return (
    <div className="footer-bottom flex justify-center space-x-6">
      {socialMedia.map((icon, index) => (
        <a
          key={index}
          href={icon.url}
          className={`${socialIconColor} hover:${socialIconHoverColor} transition-colors duration-300`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
