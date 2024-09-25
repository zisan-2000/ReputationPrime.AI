import React from "react";
import { FaTimes } from "react-icons/fa"; // Importing close icon

const SidebarHeader = ({ title, toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between border-b p-4">
      <h2 className="text-xl font-bold">
        <span className="header-title-black">{title.part1}</span>
        <span className="header-title-green">{title.part2}</span>
      </h2>
      <FaTimes
        className="cursor-pointer text-gray-600"
        onClick={toggleSidebar}
        size={24}
      />
    </div>
  );
};

export default SidebarHeader;
