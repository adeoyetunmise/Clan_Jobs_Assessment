import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const SelectCardForm = () => {
    const [isYearly, setIsYearly] = useState(false);

    const handleToggle = () => {
      setIsYearly(!isYearly);
    };
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

        {/* Right Section: Cards */}
        <div className="lg:w-1/2 w-full p-8 text-left flex flex-col -ml-20 mt-7">
          <h2 className="text-2xl font-semibold text-sky-800 mb-2">
            Select your plan
          </h2>
          <p className="text-gray-600 mb-6">
          You have the option of monthly or yearly billing.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Card 1 */}
            <Link
              to="/plan/1"  // Example link
              className="flex flex-col items-center border border-gray-300 rounded-lg p-4 hover:border-sky-800  hover:shadow-lg transition duration-300"
            >
              <img src="/src/assets/icon-arcade.svg" className="-ml-10" alt="" srcset="" />
              <p className="text-sm font-semibold mt-20 -ml-8 text-sky-800">Arcade</p>
              <p className="text-xs text-gray-600 -ml-10">$9/mo</p>
            </Link>

            {/* Card 2 */}
            <Link
              to="/plan/2"  // Example link
              className="flex flex-col items-center border border-gray-300 rounded-lg p-4 hover:border-sky-800 hover:shadow-lg transition duration-300"
            >
              <img src="/src/assets/icon-advanced.svg" className="-ml-10" alt="" srcset="" />
              <p className="text-sm font-semibold mt-20 -ml-5 text-sky-800">Advanced</p>
              <p className="text-xs text-gray-600 -ml-10">$12/mo</p>
            </Link>

            {/* Card 3 */}
            <Link
              to="/plan/3"  // Example link
              className="flex flex-col items-center border border-gray-300 rounded-lg p-4 hover:border-sky-800  hover:shadow-lg transition duration-300"
            >
              <img src="/src/assets/icon-pro.svg" className="-ml-10" alt="" srcset="" />
              <p className="text-sm font-semibold mt-20 -ml-14 text-sky-800">Pro</p>
              <p className="text-xs text-gray-600 -ml-10">$15/mo</p>
            </Link>
          </div>

          <div className="flex items-center justify-center mt-8 bg-slate-200 rounded-md space-x-4">
      {/* Monthly label */}
      <p className={`text-sm ${!isYearly ? 'text-sky-800 font-semibold' : 'text-gray-500'}`}>Monthly</p>

      {/* Toggle Switch */}
      <div
        className="relative w-16 h-8 cursor-pointer rounded-full bg-sky-800"
        onClick={handleToggle}
      >
        <div
          className={`absolute top-0 left-0 w-8 h-8 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out ${
            isYearly ? 'transform translate-x-8' : ''
          }`}
        ></div>
      </div>

      {/* Yearly label */}
      <p className={`text-sm ${isYearly ? 'text-sky-800 font-semibold' : 'text-gray-500'}`}>Yearly</p>
    </div>

    <div className="flex flex-row mt-28">
            <a href="">Go Back</a>
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

export default SelectCardForm;
