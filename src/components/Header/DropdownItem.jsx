import React from "react";

const DropdownItem = ({ item }) => {
  return (
    <a href={item.url} className="block px-4 py-2 hover:bg-gray-100">
      {item.name}
    </a>
  );
};

export default DropdownItem;
