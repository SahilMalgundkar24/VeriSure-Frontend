import React from "react";

const Features = () => {
  return (
    <div className="p-16">
      <h1 className="text-4xl font-medium">Features and Benefits</h1>
      <div className="relative">
        <div className="select-none absolute opacity-80 inset-0 flex justify-center items-start mt-8 -z-10">
          <img src="/images/featuresBg.png" alt="" />
          <div className="absolute w-[400px] h-[400px] bg-[#A0A7F1] -z-10 opacity-50 blur-3xl rounded-full"></div>
        </div>
        <div className="w-full flex justify-center items-end gap-16 pt-24">
          <div className="flex flex-col w-1/4 bg-gradient-to-br from-[#E1DAFC] to-[#B8D4FC] px-5 py-10 rounded-lg">
            <h1 className="text-center font-medium text-lg">
              For Organization
            </h1>
            <div className="h-px w-full bg-[#262932] opacity-30 my-5"></div>
            <div className="flex flex-col gap-3">
              <p>Saves time by reducing manual effort</p>
              <p>Minimizes human error</p>
              <p>Real-time insights into recruitment pipelines.</p>
              <p>Comprehensive dashboard for data-driven decision-making</p>
              <p>Seamless integration with existing workflows</p>
            </div>
          </div>

          <div className="flex flex-col w-1/5 bg-white px-5 py-5 rounded-lg h-fit">
            <h1 className="text-center font-medium">For Applicants</h1>
            <div className="h-px w-full bg-[#262932] opacity-30 my-3"></div>
            <div className="flex flex-col gap-3 text-sm">
              <p>Instant feedback on application issues</p>
              <p>Faster and more transparent process</p>
              <p>Secure and seamless document uploads</p>
              <p>Error-free submissions with AI-powered validation</p>
              <p>No delays with fully automated checks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
