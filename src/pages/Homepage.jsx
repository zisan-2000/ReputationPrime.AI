import { motion } from "framer-motion";
import React from "react";

import {
  fadeInLeft,
  fadeInUp,
  rotateIn,
  rotateX3D,
  rotateXUp,
  rotateY3D,
  rotateZUp,
  scaleInLeft,
  scaleUp,
  scaleUpRight,
} from "../components/AnimationVariants/animationVariants";
import CardSection from "../components/CardSection/CardSection";
import ConsultationSection from "../components/ConsultationSection/ConsultationSection";
import ContactSection from "../components/ContactSection/ContactSection";
import FAQSection from "../components/FAQSection/FAQSection";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import RecognitionSection from "../components/RecognitionSection/RecognitionSection"; // Import the RecognitionSection component
import ReputationSection from "../components/ReputationSection/ReputationSection";
import ReviewSection from "../components/ReviewSection/ReviewSection";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import SolutionsSection from "../components/Solutions/SolutionsSection";
import VideoSection from "../components/VideoSection/VideoSection";
import {
  cardSectionData,
  consultationSectionData,
  contactSectionData,
  faqSectionData,
  footerData,
  headerData,
  heroData,
  recognitionData,
  reputationData,
  reviewSectionData,
  serviceSectionData,
  solutionsData,
  videoSectionData,
} from "../Data/Data"; // Import all necessary data

const Homepage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, staggerChildren: 0.3 }}
    >
      {/* Pass data and styles as props to the Header component */}
      <motion.div {...rotateIn}>
        <Header
          title={headerData.title}
          navLinks={headerData.navLinks}
          contact={headerData.contact}
          styles={headerData.styles} // Pass styles as props for Header
        />
      </motion.div>

      {/* Pass data and styles as props to the Hero component */}
      <motion.div {...fadeInUp}>
        <Hero
          title={heroData.title}
          subtitle={heroData.subtitle}
          question={heroData.question}
          cards={heroData.cards}
          extraCards={heroData.extraCards} // Pass extra cards as a prop
          buttonLabel={heroData.buttonLabel}
          styles={heroData.styles}
        />
      </motion.div>

      {/* Add Recognition Section with data and styles from recognitionData */}
      <motion.div {...scaleUp}>
        <RecognitionSection
          title={recognitionData.title}
          items={recognitionData.items}
          styles={recognitionData.styles} // Pass styles as props for Recognition Section
        />
      </motion.div>

      {/* Add Reputation Section with data from reputationData */}
      {/* Add Reputation Section with data and styles from reputationData */}
      <motion.div {...fadeInLeft}>
        <ReputationSection
          title={reputationData.title}
          paragraphs={reputationData.paragraphs}
          styles={reputationData.styles} // Pass styles as props for Reputation Section
        />
      </motion.div>

      {/* Add Solutions Section with data from solutionsData */}
      <SolutionsSection solutions={solutionsData} />

      {/* Add Video Section with data from videoSectionData */}
      <motion.div {...rotateXUp}>
        <VideoSection
          heading={videoSectionData.heading}
          subheading={videoSectionData.subheading}
          videoSrc={videoSectionData.videoSrc}
          styles={videoSectionData.styles} // Pass styles as props
        />
      </motion.div>

      {/* Add Card Section with data from cardSectionData */}
      <motion.div {...rotateY3D}>
        <CardSection cards={cardSectionData.cards} />
      </motion.div>

      {/* Add Consultation Section with data from consultationSectionData */}
      <motion.div {...rotateZUp}>
        <ConsultationSection
          heading={consultationSectionData.heading}
          points={consultationSectionData.points}
          phoneNumber={consultationSectionData.phoneNumber}
          buttonText={consultationSectionData.buttonText}
          imageSrc={consultationSectionData.imageSrc}
          styles={consultationSectionData.styles} // Pass styles as props
        />
      </motion.div>

      {/* Add Service Section with data from serviceSectionData */}
      <motion.div {...scaleInLeft}>
        <ServiceSection
          title={serviceSectionData.title}
          paragraphs={serviceSectionData.paragraphs}
          services={serviceSectionData.services}
          styles={serviceSectionData.styles} // Pass styles as props
        />
      </motion.div>

      {/* Add Contact Section with data from contactSectionData */}
      <motion.div {...scaleUpRight}>
        <ContactSection
          icon={contactSectionData.icon}
          heading={contactSectionData.heading}
          phoneText={contactSectionData.phoneText}
          phoneNumber={contactSectionData.phoneNumber}
          buttonText={contactSectionData.buttonText}
          styles={contactSectionData.styles} // Pass styles as props
        />
      </motion.div>

      {/* Add FAQ Section with data from faqSectionData */}
      <motion.div {...rotateX3D}>
        <FAQSection
          title={faqSectionData.title}
          faqs={faqSectionData.faqs}
          buttonLabel={faqSectionData.buttonLabel}
          styles={faqSectionData.styles} // Pass styles as props
        />
      </motion.div>

      {/* Add Review Section with data from reviewSectionData */}
      <motion.div {...rotateIn}>
        <ReviewSection
          title={reviewSectionData.title}
          rating={reviewSectionData.rating}
          totalReviews={reviewSectionData.totalReviews}
          reviews={reviewSectionData.reviews}
          styles={reviewSectionData.styles} // Pass styles as props
        />
      </motion.div>

      {/* Add Footer Section with data from footerData */}
      <motion.div {...rotateIn}>
        <Footer
          logo={footerData.logo}
          contactInfo={footerData.contactInfo}
          socialMedia={footerData.socialMedia}
          links={footerData.links}
          styles={footerData.styles} // Pass styles as props
        />
      </motion.div>
    </motion.div>
  );
};

export default Homepage;
