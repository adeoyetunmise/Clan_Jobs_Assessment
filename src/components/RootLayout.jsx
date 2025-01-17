import React, { useState } from "react";

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
              <button className="w-8 h-8 flex items-center justify-center border border-white text-white  rounded-full hover:bg-blue-300 hover:text-black">
                2
              </button>
              <div>
                <p className="text-sm text-left text-gray-300"> STEP 2</p>
                <p className="text-sm font-semibold text-white">SELECT PLAN</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start space-x-4">
              <button className="w-8 h-8 flex items-center justify-center border border-white text-white  rounded-full hover:bg-blue-300 hover:text-black">
                3
              </button>
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
              className="mt-4 text-sm py-2 px-4 bg-sky-800 text-white font-medium rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
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



i want another component titled FinishingUp, very similar to the BigCardForm, retain the image and the buttons with numbers and the paragraphs there, retain the right section H2 and P, only replace the form with a two div, in the first div, there 3 paragraghs, under the first paragragh, there is a text that says change and is a link after which follows a line, at the far end of the three paragraghs is another paragraph, the second div has one paragraph and at the far end another paragragph.


From the codes i have sent, when the user have filled their personal info, and clicked on the next step, which is the "selectcard form, whatever they have picked from the selectcardform and picked in PickAddOn should reflect in the paragraphs of the finishing up


From the codes i have sent, when the users gets to the "selectcard form, whatever they have picked from the selectcardform including the yearly and monthly toggle and picked in PickAddOn should reflect in the paragraphs of the finishing up, for example, if the user picks the arcade card and chose monthly then clicks on next step,which takes the user to PickAddOn and then the user picks the online service card, clicks on the next step it takes the user to the finishingUp, i should be able to get the value in the paragraghs respectfully in the finishingUp, it should also calculate the amount and reflect the total