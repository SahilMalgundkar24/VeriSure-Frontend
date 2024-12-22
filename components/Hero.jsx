import React from "react";
import CtaButton from "./ui/CtaButton";
import carddata from "@/lib/data/herocardsdata.json";
import HeroCards from "./ui/HeroCards";

const Hero = () => {
  return (
    <div className="px-16">
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-[500px] h-[500px] bg-[#A0A7F1] opacity-10 blur-3xl rounded-full"></div>
      </div>
      <div className="w-full flex flex-col items-center gap-5 mt-20">
        <h1 className="text-6xl font-medium w-full max-w-5xl text-center tracking-tight">
          Fast, Reliable, and Secure Verification at Your Fingertips
        </h1>
        <p className="text-xl w-full max-w-xl text-center">
          AI-Driven Solution for a Seamless Document Verification Process.
        </p>
        <div>
          <CtaButton name="Demo" className="px-2 py-2" />
        </div>
      </div>

      <div className="w-full flex gap-3 relative">
        {carddata.herocardsdata.map((card) => (
          <HeroCards
            key={card.id}
            image={card.image}
            title={card.title}
            className={card.className}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
