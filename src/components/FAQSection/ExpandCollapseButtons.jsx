import React from "react";

const ExpandCollapseButtons = ({ expandAll, collapseAll, linkColor }) => {
  return (
    <div className="mb-8 flex justify-center space-x-4">
      <button onClick={expandAll} className={`faqbutton ${linkColor} `}>
        Expand all
      </button>
      <span>|</span>
      <button onClick={collapseAll} className={`faqbutton ${linkColor} `}>
        Collapse all
      </button>
    </div>
  );
};

export default ExpandCollapseButtons;
