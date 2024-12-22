import React from "react";
import { ArrowUpRight } from "lucide-react";

const CtaButton = ({ name, className }) => {
  return (
    <button
      className={`flex items-center bg-[#262932] rounded-full text-white ${className}`}
    >
      <div className="ml-5 mr-4">{name}</div>
      <div className="bg-white h-7 w-7 p-1 rounded-full flex items-center justify-center">
        <ArrowUpRight color="#262932" />
      </div>
    </button>
  );
};

export default CtaButton;
