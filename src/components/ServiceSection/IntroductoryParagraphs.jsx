// IntroductoryParagraphs.js
import React from "react";

const IntroductoryParagraphs = ({ paragraphs, paragraphColor }) => {
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={`mb-6 text-lg ${paragraphColor}`}>
          {paragraph}
        </p>
      ))}
    </>
  );
};

export default IntroductoryParagraphs;
