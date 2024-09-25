import React, { useState } from "react";
import NavLink from "./NavLink";

const HeaderNav = ({ navLinks, styles }) => {
  const [dropdownIndex, setDropdownIndex] = useState(null);

  // Toggle the dropdown visibility
  const toggleDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  return (
    <nav className="header-nav flex">
      {navLinks.map((link, index) => (
        <NavLink
          key={index}
          link={link}
          isOpen={dropdownIndex === index}
          toggleDropdown={toggleDropdown}
          index={index}
          styles={styles}
        />
      ))}
    </nav>
  );
};

export default HeaderNav;
