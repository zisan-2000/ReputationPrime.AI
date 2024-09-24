import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      {/* Card Image */}
      <div className="card-image">
        <img src={image} alt={title} className="card-img" />
      </div>
      {/* Card Title */}
      <h3 className="card-title">{title}</h3>
      {/* Card Description */}
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
