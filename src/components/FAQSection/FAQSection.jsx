// FAQSection.js
import React, { useState } from "react";
import ExpandCollapseButtons from "./ExpandCollapseButtons";
import FAQItem from "./FAQItem";
import FAQTitle from "./FAQTitle";
import ViewAllButton from "./ViewAllButton";

const FAQSection = ({ title, faqs, buttonLabel, styles }) => {
  const [expanded, setExpanded] = useState([]);

  // Function to toggle FAQ item
  const toggleFAQ = (index) => {
    if (expanded.includes(index)) {
      setExpanded(expanded.filter((item) => item !== index));
    } else {
      setExpanded([...expanded, index]);
    }
  };

  // Function to expand all FAQ items
  const expandAll = () => {
    setExpanded(faqs.map((_, index) => index));
  };

  // Function to collapse all FAQ items
  const collapseAll = () => {
    setExpanded([]);
  };

  return (
    <section className={`faq-section py-12 ${styles.backgroundColor}`}>
      <div className="container mx-auto px-4 text-center md:px-8 lg:px-16">
        {/* Section Title */}
        <FAQTitle title={title} titleColor={styles.titleColor} />

        {/* Expand/Collapse All */}
        <ExpandCollapseButtons
          expandAll={expandAll}
          collapseAll={collapseAll}
          linkColor={styles.linkColor}
        />

        {/* FAQ Items */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isExpanded={expanded.includes(index)}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>

        {/* View All FAQ Button */}
        <ViewAllButton
          buttonLabel={buttonLabel}
          buttonColor={styles.buttonColor}
          buttonTextColor={styles.buttonTextColor}
          buttonHover={styles.buttonHover}
        />
      </div>
    </section>
  );
};

export default FAQSection;
