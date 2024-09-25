import React from "react";

const SidebarContact = ({ contact, toggleSidebar, styles }) => {
  return (
    <div className="sidebar-contact">
      <a
        href={`tel:${contact.phoneNumber}`}
        className={`${styles.textColor} mb-4 block`}
      >
        {contact.phoneNumber}
      </a>
      <button
        className={`w-full rounded-lg py-2 ${styles.buttonColor} ${styles.buttonTextColor}`}
        onClick={toggleSidebar} // Close sidebar on button click
      >
        {contact.buttonLabel}
      </button>
    </div>
  );
};

export default SidebarContact;
