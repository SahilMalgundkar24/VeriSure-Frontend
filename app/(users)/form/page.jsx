"use client";
import ProgressBar from "@/components/form/ProgressBar";
import React, { useState, useEffect } from "react";
import Step1 from "@/components/form/Step1";
import Step2 from "@/components/form/Step2";

const Page = () => {
  const [steps, setSteps] = useState(1);
  const [formData, setFormData] = useState({});
  const [mounted, setMounted] = useState(false);

  const handleNext = () => {
    if (steps === 1) {
      console.log("Step 1 Data:", formData);
    }
    setSteps(steps + 1);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex flex-col h-screen w-full items-center justify-center"></div>
    );
  }

  return (
    <div className="px-16 py-7 w-full flex justify-center">
      <div className="w-full flex flex-col justify-center max-w-5xl">
        <div className="w-full flex flex-col gap-1 items-center justify-center">
          <h1 className="text-3xl text-center font-medium">
            Get Started with VeriEase
          </h1>
          <p className="text-center text-sm">
            Please fill out the form below to begin the document verification
            process. It's quick, secure, and ensures accurate validation of your
            details. Let's make verification effortless!
          </p>
        </div>
        <div>
          <ProgressBar steps={steps} />
        </div>
        <div className="w-full">
          {steps === 1 && (
            <Step1 formData={formData} setFormData={setFormData} />
          )}
          {steps === 2 && <Step2 />}
        </div>

        <div className="w-full flex justify-end mt-4">
          <button
            onClick={handleNext}
            className="bg-[#A0A7F1] px-5 py-2 rounded-md text-sm"
          >
            {steps === 1 ? "Next" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
