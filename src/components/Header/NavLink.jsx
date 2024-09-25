import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";

const NavLink = ({ link, isOpen, toggleDropdown, index, styles }) => {
  return (
    <div
      className="relative"
      onMouseEnter={() => toggleDropdown(index)}
      onMouseLeave={() => toggleDropdown(null)}
    >
      <a href={link.url} className={`${styles.textColor} flex items-center`}>
        {link.name}
        {link.dropdownItems && (
          <>
            {isOpen ? (
              <FaChevronUp className="ml-1" />
            ) : (
              <FaChevronDown className="ml-1" />
            )}
          </>
        )}
      </a>
      {link.dropdownItems && isOpen && (
        <DropdownMenu dropdownItems={link.dropdownItems} />
      )}
    </div>
  );
};

export default NavLink;
