// CompanyReply.js
import React from "react";
import { FaReply } from "react-icons/fa"; // Import the reply icon

const CompanyReply = ({ reply, replyDate }) => {
  return (
    <div className="mb-2 rounded-md bg-gray-100 p-3">
      <FaReply className="mr-2 inline text-gray-500" />
      <span className="text-gray-800">{reply}</span>
      <span className="mt-1 block text-sm text-gray-500">{replyDate}</span>
    </div>
  );
};

export default CompanyReply;
