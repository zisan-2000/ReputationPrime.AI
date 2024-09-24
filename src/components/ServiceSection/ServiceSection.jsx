// ServiceSection.js
import React from "react";
import IntroductoryParagraphs from "./IntroductoryParagraphs";
import SectionTitle from "./SectionTitle";
import ServiceList from "./ServiceList";

const ServiceSection = ({ title, paragraphs, services, styles }) => {
  return (
    <section className={`service-section py-12 ${styles.backgroundColor}`}>
      <div className="container mx-auto px-4 text-center md:px-8 lg:px-16">
        {/* Section Title */}
        <SectionTitle title={title} titleColor={styles.titleColor} />

        {/* Introductory Paragraphs */}
        <IntroductoryParagraphs
          paragraphs={paragraphs}
          paragraphColor={styles.paragraphColor}
        />

        {/* Service Cards */}
        <ServiceList services={services} />
      </div>
    </section>
  );
};

export default ServiceSection;
