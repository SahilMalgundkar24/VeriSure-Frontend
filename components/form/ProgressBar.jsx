import React from "react";

const ProgressBar = ({ steps }) => {
  return (
    <div className="py-7">
      <div className="flex gap-4 justify-center items-start">
        <div className="flex flex-col justify-center items-center gap-3 w-32">
          <div
            className={`w-10 h-10 rounded-full flex justify-center items-center ${
              steps >= 1 ? "bg-[#A0A7F1]" : "bg-gray-300"
            }`}
          >
            <h1>1</h1>
          </div>
          <h1 className="text-xs">Personal Details</h1>
        </div>
        <div className="h-px w-44 bg-[#262932] mt-4"></div>
        <div className="flex flex-col justify-center items-center gap-3 w-32">
          <div
            className={`w-10 h-10 rounded-full flex justify-center items-center ${
              steps >= 2 ? "bg-[#A0A7F1]" : "bg-gray-300"
            }`}
          >
            <h1>2</h1>
          </div>
          <h1 className="text-xs">Upload Documents</h1>
        </div>

        {/* <div className="h-px w-44 bg-[#262932] mt-4"></div>

        <div className="flex flex-col justify-center items-center gap-3 w-32">
          <div
            className={`w-10 h-10 rounded-full flex justify-center items-center ${
              steps >= 3 ? "bg-[#A0A7F1]" : "bg-gray-300"
            }`}
          >
            <h1>3</h1>
          </div>
          <h1 className="text-xs">Review Details</h1>
        </div> */}
      </div>
    </div>
  );
};

export default ProgressBar;
