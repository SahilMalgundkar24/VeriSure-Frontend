import React from "react";

const Textfield = ({ label, name, placeholder, value, onChange }) => {
  return (
    <div className="w-full">
      <label className="text-xs">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full mt-1 p-2 bg-transparent text-sm border rounded-md focus:outline-none focus:ring-[#A0A7F1] focus:border-blue-500"
      />
    </div>
  );
};

export default Textfield;
