import React from "react";

const Dobfield = ({ value, onChange }) => {
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
        className="w-full mt-1 p-2 bg-transparent text-sm border rounded-md focus:outline-none focus:ring-[#A0A7F1] focus:border-blue-500"
      />
    </div>
  );
};

export default Dobfield;
