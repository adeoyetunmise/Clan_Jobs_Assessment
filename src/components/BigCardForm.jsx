import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BigCardForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
      navigate("/select-card");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100">
      {/* Mobile Layout */}
      <div className="lg:hidden w-full">
        <div className="relative">
          {/* Mobile Image */}
          <img
            src="/images/bg-sidebar-mobile.svg"
            alt="Mobile Sidebar"
            className="w-full h-auto"
          />

          {/* Steps as Numbers */}
          <div className="absolute inset-x-0 top-4 flex justify-center space-x-4">
            {[1, 2, 3, 4].map((step) => (
              <Link
                key={step}
                to={
                  step === 1
                    ? "/"
                    : step === 2
                    ? "/select-card"
                    : step === 3
                    ? "/pick-addons"
                    : "/finish-up"
                }
              >
                <button
                  className="w-8 h-8 flex items-center justify-center border border-white text-white rounded-full hover:bg-blue-300 hover:text-black"
                >
                  {step}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl flex flex-col lg:flex-row relative">
        {/* Left Section for Desktop */}
        <div className="hidden lg:block lg:w-1/2 mb-4 lg:mb-0 relative">
          <img
            src="/images/bg-sidebar-desktop.svg"
            alt="Placeholder"
            className="rounded-lg object-cover"
          />

          {/* Numbers and Paragraphs */}
          <div className="absolute top-8 left-8 flex flex-col space-y-8">
            <div className="flex items-start space-x-4">
              <Link to="/">
                <button className="w-8 h-8 flex items-center justify-center border border-white text-white rounded-full hover:bg-blue-300 hover:text-black">
                  1
                </button>
              </Link>
              <div>
                <p className="text-sm text-left text-gray-300"> STEP 1</p>
                <p className="text-sm font-semibold text-white">YOUR INFO</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Link to="/select-card">
                <button className="w-8 h-8 flex items-center justify-center border border-white text-white rounded-full hover:bg-blue-300 hover:text-black">
                  2
                </button>
              </Link>
              <div>
                <p className="text-sm text-left text-gray-300"> STEP 2</p>
                <p className="text-sm font-semibold text-white">SELECT PLAN</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Link to="/pick-addons">
                <button className="w-8 h-8 flex items-center justify-center border border-white text-white rounded-full hover:bg-blue-300 hover:text-black">
                  3
                </button>
              </Link>
              <div>
                <p className="text-sm text-left text-gray-300"> STEP 3</p>
                <p className="text-sm font-semibold text-white">ADD-ONS</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Link to="/finish-up">
                <button className="w-8 h-8 flex items-center justify-center border border-white text-white rounded-full hover:bg-blue-300 hover:text-black">
                  4
                </button>
              </Link>
              <div>
                <p className="text-sm text-left text-gray-300"> STEP 4</p>
                <p className="text-sm font-semibold text-white">SUMMARY</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="lg:w-1/2 w-full flex justify-center p-4">
          <div className="bg-white shadow-lg lg:shadow-none -mt-24 lg:mt-0 rounded-lg p-6 w-full lg:-ml-36 max-w-lg">
            <h2 className="text-2xl font-semibold text-sky-800 mb-2">
              Personal info
            </h2>
            <p className="text-gray-600 mb-6 lg:whitespace-nowrap">
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
                <label className="block text-sm font-medium text-sky-800 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder=" e.g. +1 234 567 890"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="text-sm py-2 px-3 bg-sky-800 float-end text-white font-medium rounded-lg hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-blue-300 ml-auto"
              >
                Next Step
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCardForm;
