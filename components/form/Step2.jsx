import React from "react";
import Uploadfiles from "@/components/form/Uploadfiles";
const Step2 = () => {
  return (
    <form className="w-full py-3 flex flex-col gap-7">
      <Uploadfiles label="Aadhaar Card" name="aadhaar" />
      <Uploadfiles label="Pan Card" name="pan" />
    </form>
  );
};

export default Step2;
