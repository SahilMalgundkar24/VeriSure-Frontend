import React from "react";

const Selectfield = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <label className="text-xs">
        Gender <span className="text-red-500">*</span>
      </label>
      <select
        name="gender"
        value={value}
        onChange={onChange}
        className="w-full mt-1 p-2 bg-transparent text-sm border rounded-md focus:outline-none focus:ring-[#A0A7F1] focus:border-blue-500"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};

export default Selectfield;
