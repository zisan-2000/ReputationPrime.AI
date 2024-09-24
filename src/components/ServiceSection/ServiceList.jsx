// ServiceList.js
import React from "react";
import ServiceCard from "./ServiceCard"; // Import the ServiceCard component

const ServiceList = ({ services }) => {
  return (
    <div className="flex flex-col justify-center gap-8 md:flex-row">
      {services.map((service, index) => (
        <div key={index} className="w-full md:w-1/3">
          <ServiceCard
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
