// ConsultationSection.js
import React from "react";
import ConsultationButton from "./ConsultationButton";
import ConsultationHeading from "./ConsultationHeading";
import ConsultationImage from "./ConsultationImage";
import ConsultationPoints from "./ConsultationPoints";
import PhoneNumberSection from "./PhoneNumberSection";

const ConsultationSection = ({
  heading,
  points,
  phoneNumber,
  buttonText,
  imageSrc,
  styles,
}) => {
  return (
    <section className={`consultation-section py-12 ${styles.backgroundColor}`}>
      <div className="container mx-auto flex flex-col items-center px-4 md:flex-row md:px-8 lg:px-16">
        {/* Left Content */}
        <div className="mb-8 text-center md:mb-0 md:w-1/2 md:text-left">
          <ConsultationHeading
            heading={heading}
            headingColor={styles.headingColor}
          />
          <ConsultationPoints points={points} pointColor={styles.pointColor} />
          <div className="flex flex-col items-center md:flex-row md:items-start">
            <PhoneNumberSection phoneNumber={phoneNumber} />
            <div>
              <p className="mb-2 font-semibold">
                Get Your Free Reputation Consultation
              </p>
              <ConsultationButton buttonText={buttonText} />
            </div>
          </div>
        </div>
        {/* Right Content (Image) */}
        <ConsultationImage imageSrc={imageSrc} />
      </div>
    </section>
  );
};

export default ConsultationSection;
