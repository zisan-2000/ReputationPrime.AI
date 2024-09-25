import React, { useState } from "react";
import HeroButton from "./HeroButton";
import HeroCard from "./HeroCard";
import HeroTitle from "./HeroTitle";

const Hero = ({
  title,
  subtitle,
  question,
  cards,
  extraCards,
  buttonLabel,
  styles,
}) => {
  // State to control the visibility of extra cards
  const [showExtraCards, setShowExtraCards] = useState(false);

  // Function to handle button click
  const handleButtonClick = () => {
    setShowExtraCards(true); // Show extra cards on button click
  };

  return (
    <section className={`${styles.backgroundColor} ${styles.textColor}`}>
      <div className="hero-container ">
        {/* Hero Title Section */}
        <HeroTitle
          title={title}
          subtitle={subtitle}
          question={question}
          styles={styles}
        />

        {/* Hero Cards Section */}
        <div className="hero-card-container  ">
          {cards.map((card, index) => (
            <HeroCard
              key={index}
              type={card.type}
              icon={card.icon}
              border={card.border}
              styles={styles}
            />
          ))}
          {/* Render extra cards only if showExtraCards is true */}

          {showExtraCards &&
            extraCards.map((card, index) => (
              <HeroCard
                key={index}
                type={card.type}
                icon={card.icon}
                border={card.border}
                styles={styles}
              />
            ))}
        </div>

        {/* Hero Button Section */}
        {!showExtraCards && (
          <div className="mt-6 flex justify-center">
            <HeroButton
              buttonLabel={buttonLabel}
              styles={styles}
              onClick={handleButtonClick}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
