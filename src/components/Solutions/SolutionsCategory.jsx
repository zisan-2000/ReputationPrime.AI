import React from "react";
import SolutionCard from "./SolutionCard"; // Import the SolutionCard component

const SolutionsCategory = ({ category }) => {
  return (
    <div className="solutions-category my-8">
      <h2 className="solutions-heading mb-6 text-center text-2xl font-bold">
        {category.title}
      </h2>
      <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {category.cards.map((card, index) => (
          <div key={index} className="w-full max-w-xs">
            <SolutionCard
              icon={card.icon}
              title={card.title}
              description={card.description}
              backgroundColor={card.backgroundColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsCategory;
