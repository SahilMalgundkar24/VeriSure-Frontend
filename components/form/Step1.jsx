import React from "react";
import Selectfield from "@/components/form/Selectfield";
import Textfield from "@/components/form/Textfield";
import Textareafeild from "@/components/form/Textareafield";
import Dobfield from "@/components/form/Dobfield";

const Step1 = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="w-full py-3 flex flex-col gap-5">
      <div className="flex justify-between gap-5">
        <Textfield
          label="First name"
          name="firstname"
          placeholder="Enter your first name"
          value={formData.firstname || ""}
          onChange={handleChange}
        />
        <Textfield
          label="Middle name"
          name="middlename"
          placeholder="Enter your middle name"
          value={formData.middlename || ""}
          onChange={handleChange}
        />
        <Textfield
          label="Last name"
          name="lastname"
          placeholder="Enter your Last name"
          value={formData.lastname || ""}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-between gap-5">
        <Textfield
          label="Email"
          name="email"
          placeholder="Enter your email"
          value={formData.email || ""}
          onChange={handleChange}
        />
        <Dobfield
          value={formData.dob || ""}
          onChange={(dob) => setFormData({ ...formData, dob })}
        />
        <Textfield
          label="Phone Number"
          name="phone"
          placeholder="Enter your Phone Number"
          value={formData.phone || ""}
          onChange={handleChange}
        />
      </div>

      <div className="w-full">
        <Textareafeild value={formData.address || ""} onChange={handleChange} />
      </div>

      <div className="flex justify-between gap-5">
        <Textfield
          label="City"
          name="city"
          placeholder="Enter your City"
          value={formData.city || ""}
          onChange={handleChange}
        />
        <Textfield
          label="State"
          name="state"
          placeholder="Enter your State"
          value={formData.state || ""}
          onChange={handleChange}
        />
        <Textfield
          label="Pincode"
          name="pincode"
          placeholder="Enter your Pincode"
          value={formData.pincode || ""}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-between gap-5">
        <Textfield
          label="Aadhaar Number"
          name="aadhaar"
          placeholder="Enter your Aadhaar Number"
          value={formData.aadhaar || ""}
          onChange={handleChange}
        />
        <Textfield
          label="Pan Number"
          name="pan"
          placeholder="Enter your Pan Number"
          value={formData.pan || ""}
          onChange={handleChange}
        />
        <Textfield
          label="Gate Rank"
          name="gate"
          placeholder="Enter your Gate Rank"
          value={formData.gate || ""}
          onChange={handleChange}
        />
      </div>

      <div className="w-full">
        <Selectfield value={formData.gender || ""} onChange={handleChange} />
      </div>
    </form>
  );
};

export default Step1;
