import React from "react";
import Card from "./Card";

const CardSection = ({ cards }) => {
  return (
    <section className="card-section">
      <div className="card-section-container">
        {cards.map((card, index) => (
          <div key={index} className="card-wrapper">
            <Card
              image={card.image}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
