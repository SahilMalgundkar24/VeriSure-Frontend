import React from "react";

const Dobfield = ({ value, onChange, error }) => {
  return (
    <div className="w-full">
      <label className="text-xs">
        Date of Birth <span className="text-red-500">*</span>
      </label>
      <input
        name="dob"
        type="date"
        value={value}
        onChange={onChange}
        className={`w-full mt-1 p-2 bg-transparent text-sm border rounded-md focus:outline-none ${
          error
            ? "border-red-500"
            : "focus:ring-[#A0A7F1] focus:border-blue-500"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Dobfield;
