// Footer.js
import React from "react";
import FooterLinks from "./FooterLinks";
import FooterLogo from "./FooterLogo";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = ({ logo, contactInfo, socialMedia, links, styles }) => {
  return (
    <footer
      className={`footer py-12 ${styles.backgroundColor} ${styles.textColor}`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Logo and Contact Info */}
        <FooterLogo
          logo={logo}
          contactInfo={contactInfo}
          linkColor={styles.linkColor}
        />

        <div className="footer-divider my-6 border-t border-gray-600"></div>

        {/* Footer Links */}
        <div className="flex justify-center">
          <FooterLinks links={links} linkColor={styles.linkColor} />
        </div>

        <div className="footer-divider my-6 border-t border-gray-600"></div>

        {/* Social Media Icons */}
        <SocialMediaIcons
          socialMedia={socialMedia}
          socialIconColor={styles.socialIconColor}
          socialIconHoverColor={styles.socialIconHoverColor}
        />
      </div>
    </footer>
  );
};

export default Footer;
