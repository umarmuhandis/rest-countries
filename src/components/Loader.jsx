import React from "react";

const Loader = ({ className }) => {
  return (
    <div className={`flex items-center justify-center h-screen ${className}`}>
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
};

export default Loader;
