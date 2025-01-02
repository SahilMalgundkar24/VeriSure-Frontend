import React, { useState } from "react";

const Uploadfiles = ({ label, name }) => {
  const [documentData, setDocumentData] = useState({});

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDocumentData({
        [name]: file,
      });
    }
  };

  return (
    <div>
      <label className="mb-1 text-sm">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="flex justify-between gap-7 items-center mt-1">
        <div className="w-full flex flex-col text-sm">
          <input
            name={name}
            type="file"
            className="border border-gray-200 rounded-xl px-5 py-1  file:bg-transparent file:border-none file:p-2 file:mr-16"
            onChange={handleFileChange}
          />
        </div>

        <button className="px-4 py-1 bg-slate-300 rounded-md flex justify-center items-center">
          Verify
        </button>
      </div>
      {documentData[name] && (
        <div className="mt-2">
          {documentData[name].type.startsWith("image/") ? (
            <img
              src={URL.createObjectURL(documentData[name])}
              alt={`${name} Preview`}
              className="w-[30%] lg:w-[10%] h-auto max-w-xs border rounded-md"
            />
          ) : (
            <a
              href={URL.createObjectURL(documentData[name])}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Preview {label}
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Uploadfiles;
