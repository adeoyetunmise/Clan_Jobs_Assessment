import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserSelection } from "../context/UserSelectionContext"; // assuming you're using context for user selection

const PickAddOn = () => {
  const navigate = useNavigate();
  const { updateSelection } = useUserSelection();
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const handleToggleAddOn = (addOn) => {
    setSelectedAddOns((prev) => {
      if (prev.includes(addOn)) {
        return prev.filter((item) => item !== addOn);
      } else {
        return [...prev, addOn];
      }
    });
  };

  const addOns = [
    {
      id: "addon1",
      title: "Online Service",
      description: "Access to multiplayer games",
      price: "+$1/mo",
    },
    {
      id: "addon2",
      title: "Larger Storage",
      description: "Extra 1TB of cloud save",
      price: "+$2/mo",
    },
    {
      id: "addon3",
      title: "Customizable Profile",
      description: "Custom theme on your profile",
      price: "+$2/mo",
    },
  ];

  const handleNextStep = () => {
    if (selectedAddOns.length === 0) {
      alert("Please select at least one add-on before proceeding.");
      return;
    }

    // Update context with selected add-ons
    updateSelection({ addOns: selectedAddOns });
    navigate("/finish-up");
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100">
      {/* Mobile Layout */}
      <div className="lg:hidden w-full">
        <div className="relative">
          <img
            src="/src/assets/bg-sidebar-mobile.svg"
            alt="Mobile Sidebar"
            className="w-full h-auto"
          />
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
                  className="w-8 h-8 flex items-center justify-center border border-white text-white rounded-full bg-sky-800 hover:bg-blue-300 hover:text-black"
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
        {/* Left Section: Sidebar */}
        <div className="hidden lg:block lg:w-1/2 mb-4 lg:mb-0 relative">
          <img
            src="/src/assets/bg-sidebar-desktop.svg"
            alt="Desktop Sidebar"
            className="rounded-lg object-cover"
          />
          <div className="absolute top-8 left-8 flex flex-col space-y-8">
            {[1, 2, 3, 4].map((step) => (
              <div className="flex items-start space-x-4" key={step}>
                <Link to={
                  step === 1
                    ? "/"
                    : step === 2
                    ? "/select-card"
                    : step === 3
                    ? "/pick-addons"
                    : "/finish-up"
                }>
                  <button className="w-8 h-8 flex items-center justify-center border border-white text-white rounded-full hover:bg-blue-300 hover:text-black">
                    {step}
                  </button>
                </Link>
                <div>
                  <p className="text-sm text-left text-gray-300">STEP {step}</p>
                  <p className="text-sm font-semibold text-white">
                    {[
                      "YOUR INFO",
                      "SELECT PLAN",
                      "ADD-ONS",
                      "SUMMARY",
                    ][step - 1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Add-Ons */}
        <div className="bg-white shadow-lg lg:shadow-none -mt-20 lg:mt-0 rounded-lg p-6 w-full lg:-ml-24 max-w-lg">
          <h2 className="text-2xl font-semibold text-sky-800 mb-2">Pick Add-Ons</h2>
          <p className="text-gray-600 mb-6">
            Add-ons help enhance your gaming experience.
          </p>

          {/* Add-Ons List */}
          <div className="space-y-4 ">
            {addOns.map((addOn) => (
              <div
                key={addOn.id}
                className={`flex items-center justify-between border p-4 rounded-lg cursor-pointer hover:border-blue-500 transition duration-300 ${
                  selectedAddOns.includes(addOn.id)
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
                onClick={() => handleToggleAddOn(addOn.id)}
              >
                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    checked={selectedAddOns.includes(addOn.id)}
                    onChange={() => handleToggleAddOn(addOn.id)}
                    className="w-5 h-5 border-gray-300 rounded-md text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <p className="text-xs lg:text-lg font-semibold text-gray-800">
                      {addOn.title}
                    </p>
                    <p className="text-xs lg:text-sm whitespace-nowrap text-gray-600">{addOn.description}</p>
                  </div>
                </div>
                <p className="text-xs lg:text-sm -ml-9 -mt-4 font-semibold text-blue-600">
                  {addOn.price}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-row mt-10">
            <Link to="/select-card" className="text-sm text-gray-600">
              Go Back
            </Link>
            <button
              type="button"
              onClick={handleNextStep}
              className="text-sm py-2 px-3 bg-sky-800 text-white font-medium rounded-lg hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-blue-300 ml-auto"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickAddOn;
