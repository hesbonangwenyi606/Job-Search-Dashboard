import React from "react";

const StatusBadge = ({ status }) => {
  let statusStyle = "";

  if (status === "Interview") {
    statusStyle = "bg-blue-100 text-blue-600";
  } else if (status === "Under Review") {
    statusStyle = "bg-amber-100 text-amber-600";
  } else if (status === "Rejected") {
    statusStyle = "bg-red-100 text-red-600";
  } else if (status === "Applied") {
    statusStyle = "bg-green-100 text-green-600";
  } else {
    statusStyle = "bg-gray-100 text-gray-600";
  }

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyle}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;