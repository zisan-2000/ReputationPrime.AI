// ContactSection.js
import React from "react";
import ContactButton from "./ContactButton";
import ContactHeading from "./ContactHeading";
import ContactIcon from "./ContactIcon";
import ContactPhoneNumber from "./ContactPhoneNumber";

const ContactSection = ({
  icon,
  heading,
  phoneText,
  phoneNumber,
  buttonText,
  styles,
}) => {
  return (
    <section className={`contact-section py-12 ${styles.backgroundColor}`}>
      <div className="container mx-auto text-center">
        {/* Icon */}
        <ContactIcon icon={icon} iconColor={styles.iconColor} />

        {/* Heading */}
        <ContactHeading heading={heading} headingColor={styles.headingColor} />

        {/* Phone Number */}
        <ContactPhoneNumber
          phoneText={phoneText}
          phoneNumber={phoneNumber}
          phoneTextColor={styles.phoneTextColor}
          phoneNumberColor={styles.phoneNumberColor}
        />

        {/* Call to Action Button */}
        <ContactButton
          buttonText={buttonText}
          buttonColor={styles.buttonColor}
          buttonTextColor={styles.buttonTextColor}
          buttonHover={styles.buttonHover}
        />
      </div>
    </section>
  );
};

export default ContactSection;
