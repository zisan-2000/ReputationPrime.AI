import React from "react";

const SidebarNav = ({ navLinks, toggleSidebar, styles }) => {
  return (
    <nav className="mb-6">
      {navLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className={`mb-4 block ${styles.textColor} hover:underline`}
          onClick={toggleSidebar} // Close sidebar on link click
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default SidebarNav;
