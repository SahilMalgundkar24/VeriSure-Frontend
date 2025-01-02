import React, { useState } from "react";
import Selectfield from "@/components/form/Selectfield";
import Textfield from "@/components/form/Textfield";
import Textareafeild from "@/components/form/Textareafield";
import Dobfield from "@/components/form/Dobfield";
import * as Yup from "yup";

const Step1 = ({ formData, setFormData, onValidate }) => {
  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    middlename: Yup.string().required("Middle name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    dob: Yup.date().required("Date of Birth is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string()
      .matches(/^\d{6}$/, "Pincode must be 6 digits")
      .required("Pincode is required"),
    aadhaar: Yup.string()
      .matches(/^\d{12}$/, "Aadhaar number must be 12 digits")
      .required("Aadhaar number is required"),
    pan: Yup.string()
      .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format")
      .required("PAN is required"),
    gate: Yup.string().required("Gate rank is required"),
    gender: Yup.string().required("Gender is required"),
  });

  const validateForm = async () => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (validationErrors) {
      const errorMessages = {};
      validationErrors.inner.forEach((err) => {
        errorMessages[err.path] = err.message;
      });
      setErrors(errorMessages);
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  onValidate(validateForm);

  return (
    <form className="w-full py-3 flex flex-col gap-5">
      <div className="flex justify-between gap-5">
        <Textfield
          label="First name"
          name="firstname"
          placeholder="Enter your first name"
          value={formData.firstname || ""}
          onChange={handleChange}
          error={errors.firstname}
        />
        <Textfield
          label="Middle name"
          name="middlename"
          placeholder="Enter your middle name"
          value={formData.middlename || ""}
          onChange={handleChange}
          error={errors.middlename}
        />
        <Textfield
          label="Last name"
          name="lastname"
          placeholder="Enter your Last name"
          value={formData.lastname || ""}
          onChange={handleChange}
          error={errors.lastname}
        />
      </div>

      <div className="flex justify-between gap-5">
        <Textfield
          label="Email"
          name="email"
          placeholder="Enter your email"
          value={formData.email || ""}
          onChange={handleChange}
          error={errors.email}
        />
        <Dobfield
          value={formData.dob || ""}
          onChange={handleChange}
          error={errors.dob}
        />
        <Textfield
          label="Phone Number"
          name="phone"
          placeholder="Enter your Phone Number"
          value={formData.phone || ""}
          onChange={handleChange}
          error={errors.phone}
        />
      </div>

      <div className="w-full">
        <Textareafeild
          value={formData.address || ""}
          onChange={handleChange}
          error={errors.address}
        />
      </div>

      <div className="flex justify-between gap-5">
        <Textfield
          label="City"
          name="city"
          placeholder="Enter your City"
          value={formData.city || ""}
          onChange={handleChange}
          error={errors.city}
        />
        <Textfield
          label="State"
          name="state"
          placeholder="Enter your State"
          value={formData.state || ""}
          onChange={handleChange}
          error={errors.state}
        />
        <Textfield
          label="Pincode"
          name="pincode"
          placeholder="Enter your Pincode"
          value={formData.pincode || ""}
          onChange={handleChange}
          error={errors.pincode}
        />
      </div>

      <div className="flex justify-between gap-5">
        <Textfield
          label="Aadhaar Number"
          name="aadhaar"
          placeholder="Enter your Aadhaar Number"
          value={formData.aadhaar || ""}
          onChange={handleChange}
          error={errors.aadhaar}
        />
        <Textfield
          label="Pan Number"
          name="pan"
          placeholder="Enter your Pan Number"
          value={formData.pan || ""}
          onChange={handleChange}
          error={errors.pan}
        />
        <Textfield
          label="Gate Rank"
          name="gate"
          placeholder="Enter your Gate Rank"
          value={formData.gate || ""}
          onChange={handleChange}
          error={errors.gate}
        />
      </div>

      <div className="w-full">
        <Selectfield
          value={formData.gender || ""}
          onChange={handleChange}
          error={errors.gender}
        />
      </div>
    </form>
  );
};

export default Step1;
