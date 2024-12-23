import React from "react";
import howitworks from "@/lib/data/howitworksdata.json";
import HowItWorksCard from "./ui/HowItWorksCard";

const HowItWorks = () => {
  return (
    <div className="py-7 px-16">
      <h1 className="text-4xl text-center font-medium">How it works</h1>
      <p className="text-center text-lg mt-1">
        Effortless Verification in Just Four Simple Steps
      </p>
      <div className="relative">
        <div className="select-none absolute opacity-60 inset-0 flex justify-center items-center mt-28 -z-10">
          <img src="/images/howitworksbg.png" alt="" />
          <div className="absolute w-[400px] h-[400px] bg-[#A0A7F1] -z-10 opacity-50 blur-3xl rounded-full"></div>
        </div>
        <div className="mt-10 flex w-full justify-between gap-3">
          {howitworks.howitworks.map((item) => (
            <HowItWorksCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              className={item.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
