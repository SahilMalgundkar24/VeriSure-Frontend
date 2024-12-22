import React from "react";

const HeroCards = ({ image, title, description, className }) => {
  return (
    <div
      className={`p-5 flex flex-col gap-2 bg-white/40 h-fit backdrop-blur-2xl w-[27%] rounded-xl ${className}`}
    >
      <img src={image} className="w-20" />
      <h1 className="font-medium">{title}</h1>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default HeroCards;
