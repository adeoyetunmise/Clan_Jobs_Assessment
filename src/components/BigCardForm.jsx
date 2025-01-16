import React, { useState } from "react";
import { Link } from "react-router-dom";

const BigCardForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "The field is required";
    if (!formData.email) newErrors.email = "The field is required";
    if (!formData.phone) newErrors.phone = "The field is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl flex flex-col lg:flex-row relative">
        {/* Left Section: Image with Numbers and Paragraphs */}
        <div className="lg:w-1/2 mb-4 lg:mb-0 relative">
          <img
            src="/src/assets/bg-sidebar-desktop.svg"
            alt="Placeholder"
            className="rounded-lg object-cover"
          />

          {/* Numbers and Paragraphs */}
          <div className="absolute top-8 left-8 flex flex-col space-y-8">
            {/* Item 1 */}
            <div className="flex items-start space-x-4">
              <button className="w-8 h-8 flex items-center justify-center border border-white text-white  rounded-full hover:bg-blue-300 hover:text-black">
                1
              </button>
              <div>
                <p className="text-sm text-left text-gray-300"> STEP 1</p>
                <p className="text-sm font-semibold text-white">YOUR INFO</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start space-x-4">
                <Link to="/select-card">
              <button className="w-8 h-8 flex items-center justify-center border border-white text-white  rounded-full hover:bg-blue-300 hover:text-black">
                2
              </button>
              </Link>
              <div>
                <p className="text-sm text-left text-gray-300"> STEP 2</p>
                <p className="text-sm font-semibold text-white">SELECT PLAN</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start space-x-4">
                <Link to="/pick-addons">
              <button className="w-8 h-8 flex items-center justify-center border border-white text-white  rounded-full hover:bg-blue-300 hover:text-black">
                3
              </button>
              </Link>
              <div>
                <p className="text-sm text-left text-gray-300"> STEP 3</p>
                <p className="text-sm font-semibold text-white">ADD-ONS</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start space-x-4">
              <button className="w-8 h-8 flex items-center justify-center border border-white text-white rounded-full hover:bg-blue-300 hover:text-black">
                4
              </button>
              <div>
                <p className="text-sm text-left text-gray-300"> STEP 4</p>
                <p className="text-sm font-semibold text-white">SUMMARY</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="lg:w-1/2 w-full p-8 text-left flex flex-col -ml-20 mt-7 relative">
          <h2 className="text-2xl font-semibold text-sky-800 mb-2">
            Personal info
          </h2>
          <p className="text-gray-600 mb-6 whitespace-nowrap">
            Please provide your name, email address, and phone number.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-sky-800 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Stephen King"
                className={`w-full px-3 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-sky-800 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g.stephenking@lorem.com"
                className={`w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium  text-sky-800 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                placeholder=" e.g. +1 234 567 890"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${
                  errors.phone ? "border-red-500" : "border-gray-300 "
                } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="text-sm py-2   px-3 bg-sky-800  float-end text-white font-medium rounded-lg hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-blue-300 ml-auto m"
            >
              Next Step
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BigCardForm;
