import React from "react";

const SkeletonCard = () => {
  return (
    <div className="flex h-full animate-pulse flex-col rounded-2xl border border-secondary-100 bg-gray-100">
      <div className="mb-4 h-48 rounded-t-2xl bg-gray-300"></div>
      <div className="p-4">
        <div className="mb-4 h-6 w-3/4 rounded bg-gray-300"></div>
        <div className="mb-2 h-4 w-1/2 rounded bg-gray-300"></div>
        <div className="mb-2 h-4 w-1/3 rounded bg-gray-300"></div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
