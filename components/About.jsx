import React from "react";
import CtaButton from "./ui/CtaButton";

const About = () => {
  return (
    <div className="p-16 flex justify-between w-full items-center mt-20">
      <div className="flex flex-col items-start gap-4 w-1/2 ">
        <p>
          Partnered with <span className="underline">Delloite</span>{" "}
        </p>

        <h1 className="text-4xl font-medium max-w-3xl">
          The Only AI Solution Built for Reliable Document Verification
        </h1>

        <p className="text-sm">
          VeriEase tackles document verification challenges with multilingual
          processing, real-time accuracy, and seamless integration. Our powerful
          admin dashboard offers advanced analytics, empowering organizations to
          track, manage, and optimize the verification process like never before
        </p>
        <div className="mt-3">
          <CtaButton name="Try for free" />
        </div>
      </div>

      <div className="w-1/2 relative">
        <div className="absolute inset-0 flex justify-center items-center -z-10">
          <div className="w-[400px] h-[400px] bg-[#A0A7F1] opacity-50 blur-3xl rounded-full"></div>
        </div>
        <div className="select-none">
          <img src="/images/about.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
