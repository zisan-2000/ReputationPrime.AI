import React from "react";
import DropdownItem from "./DropdownItem";

const DropdownMenu = ({ dropdownItems }) => {
  return (
    <div className="dropdown-menu absolute mt-2 w-48 bg-white py-2 shadow-lg">
      {dropdownItems.map((item, index) => (
        <DropdownItem key={index} item={item} />
      ))}
    </div>
  );
};

export default DropdownMenu;
