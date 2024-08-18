import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    // Use for make space between content
    <div className={`mx-auto max-w-[1240px] px-4 ${className}`}>{children}</div>
  );
};

export default Container;
