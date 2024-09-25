import React from "react";
import SidebarContact from "./SidebarContact";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";

const Sidebar = ({ isOpen, toggleSidebar, navLinks, contact, styles }) => {
  return (
    <div
      className={`sidebar ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      <SidebarHeader title={contact} toggleSidebar={toggleSidebar} />
      <div className="p-4">
        {/* Sidebar Navigation Links */}
        <SidebarNav
          navLinks={navLinks}
          toggleSidebar={toggleSidebar}
          styles={styles}
        />

        {/* Sidebar Contact Information */}
        <SidebarContact
          contact={contact}
          toggleSidebar={toggleSidebar}
          styles={styles}
        />
      </div>
    </div>
  );
};

export default Sidebar;
