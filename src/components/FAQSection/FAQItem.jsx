import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const FAQItem = ({ faq, index, isExpanded, toggleFAQ }) => {
  return (
    <div className="faq-item transform rounded-lg bg-white p-4 shadow-md transition duration-300 hover:scale-105">
      <div
        onClick={() => toggleFAQ(index)}
        className="flex cursor-pointer items-center justify-between"
      >
        <h3 className="text-lg font-semibold">{faq.question}</h3>
        <span className="transform transition duration-300">
          {isExpanded ? (
            <FaMinus className="text-gray-600" />
          ) : (
            <FaPlus className="text-gray-600" />
          )}
        </span>
      </div>
      {isExpanded && (
        <p className="mt-2 text-gray-700 transition duration-300 ease-in-out">
          {faq.answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;
