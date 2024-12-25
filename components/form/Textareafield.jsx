import React from "react";

const Textareafeild = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <label className="text-xs">
        Address <span className="text-red-500">*</span>
      </label>
      <textarea
        name="address"
        rows="4"
        value={value}
        onChange={onChange}
        placeholder="Enter your address"
        className="w-full mt-1 p-2 bg-transparent text-sm border rounded-md focus:outline-none focus:ring-[#A0A7F1] focus:border-blue-500"
      />
    </div>
  );
};

export default Textareafeild;
