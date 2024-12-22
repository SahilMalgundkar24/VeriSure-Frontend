import React from "react";

const HowItWorksCard = ({ id, title, description, className }) => {
  return (
    <div
      className={`px-5 h-fit w-1/4 py-5 blue-bg flex flex-col gap-1 rounded-2xl ${className}`}
    >
      <h1 className="text-3xl font-bold ">{id}</h1>
      <h1 className="font-medium text-lg mt-3">{title}</h1>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default HowItWorksCard;
