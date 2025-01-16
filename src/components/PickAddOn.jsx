import React, { useState } from "react";
import { Link } from "react-router-dom";

const PickAddOn = () => {
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

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl flex flex-col lg:flex-row">
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
            <Link to="/">
              <button className="w-8 h-8 flex items-center justify-center border border-white text-white  rounded-full hover:bg-blue-300 hover:text-black">
                1
              </button>
              </Link>
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

        {/* Right Section: Add-Ons */}
        <div className="lg:w-1/2 w-full p-8 text-left flex flex-col -ml-20 mt-7">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Pick Add-Ons</h2>
          <p className="text-gray-600 mb-6">Add-ons help enhance your gaming experience.</p>

          {/* Add-Ons List */}
          <div className="space-y-4">
            {addOns.map((addOn) => (
              <div
                key={addOn.id}
                className={`flex items-center justify-between border p-4 rounded-lg cursor-pointer hover:border-blue-500 transition duration-300 ${
                  selectedAddOns.includes(addOn.id) ? "border-blue-500" : "border-gray-300"
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
                    <p className="text-sm font-semibold text-gray-800">{addOn.title}</p>
                    <p className="text-xs text-gray-600">{addOn.description}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-blue-600">{addOn.price}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-row mt-28">
        <div>
            <Link to="/" className="">Go Back</Link>
        </div>
        <button
              type="submit"
              className="text-sm py-2   px-3 bg-sky-800 float-right text-white font-medium rounded-lg hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-blue-300 ml-auto "
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
