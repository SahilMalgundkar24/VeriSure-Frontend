import axios from "axios";
import React, { useState } from "react";

const Uploadfiles = ({ label, name }) => {
  const [documentData, setDocumentData] = useState({});
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDocumentData({
        [name]: file,
      });
      // Reset verification status when a new file is selected
      setVerificationStatus(null);
    }
  };

  const handleUpload = async () => {
    if (!documentData[name]) return;

    setIsVerifying(true);
    try {
      const formData = new FormData();
      formData.append("file", documentData[name]);
      const classifierResponse = await axios.post(
        "http://127.0.0.1:8000/final/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(classifierResponse.data);

      // Check if the label matches the response class

      if (
        classifierResponse.data.class &&
        classifierResponse.data.class.toLowerCase() === name.toLowerCase()
      ) {
        setVerificationStatus({
          success: true,
          message: `${label} Verified successfully!`,
        });
      } else {
        setVerificationStatus({
          success: false,
          message: "Verification failed. Document type doesn't match.",
        });
      }
    } catch (error) {
      console.error("Verification error:", error);
      setVerificationStatus({
        success: false,
        message: "Error during verification. Please try again.",
      });
    } finally {
      setIsVerifying(false);
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
            className="border border-gray-200 rounded-xl px-5 py-1 file:bg-transparent file:border-none file:p-2 file:mr-16"
            onChange={handleFileChange}
          />
        </div>

        <button
          onClick={handleUpload}
          disabled={isVerifying || !documentData[name]}
          className={`px-4 py-1 rounded-md flex justify-center items-center ${
            isVerifying ? "bg-gray-300" : "bg-slate-300 hover:bg-slate-400"
          }`}
        >
          {isVerifying ? "Verifying..." : "Verify"}
        </button>
      </div>

      {verificationStatus && (
        <div
          className={`mt-2 p-2 rounded-md ${
            verificationStatus.success
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {verificationStatus.message}
        </div>
      )}

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
