import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserSelection } from "../context/UserSelectionContext";

const SelectCardForm = () => {
  const navigate = useNavigate();
  const { updateSelection } = useUserSelection();
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleNextStep = () => {
    if (!selectedPlan) {
      alert("Please select a plan before proceeding.");
      return;
    }

    // Update context with selected plan and navigate to the next step
    const planDetails = {
      name: selectedPlan.name,
      price: isYearly ? selectedPlan.yearlyPrice : selectedPlan.monthlyPrice,
      type: isYearly ? "Yearly" : "Monthly",
    };
    updateSelection({ plan: planDetails });
    navigate("/pick-addons"); // Navigate to the correct route (pick-addons)
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
            {[1, 2, 3, 4].map((step) => (
              <div className="flex items-start space-x-4" key={step}>
                <Link to={step === 1 ? "/" : `/select-card`}>
                  <button className="w-8 h-8 flex items-center justify-center border border-white text-white rounded-full hover:bg-blue-300 hover:text-black">
                    {step}
                  </button>
                </Link>
                <div>
                  <p className="text-sm text-left text-gray-300">STEP {step}</p>
                  <p className="text-sm font-semibold text-white">
                    {["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"][step - 1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Cards */}
        <div className="lg:w-1/2 w-full p-8 text-left flex flex-col -ml-20 mt-7">
          <h2 className="text-2xl font-semibold text-sky-800 mb-2">Select your plan</h2>
          <p className="text-gray-600 mb-6">
            You have the option of monthly or yearly billing.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[ 
              {
                id: "1",
                name: "Arcade",
                monthlyPrice: 9,
                yearlyPrice: 90,
                img: "/src/assets/icon-arcade.svg",
              },
              {
                id: "2",
                name: "Advanced",
                monthlyPrice: 12,
                yearlyPrice: 120,
                img: "/src/assets/icon-advanced.svg",
              },
              {
                id: "3",
                name: "Pro",
                monthlyPrice: 15,
                yearlyPrice: 150,
                img: "/src/assets/icon-pro.svg",
              }
            ].map((plan) => (
              <div
                key={plan.id}
                onClick={() => handlePlanSelect(plan)}
                className={`cursor-pointer flex flex-col items-center border ${
                  selectedPlan?.id === plan.id
                    ? "border-sky-800"
                    : "border-gray-300"
                } rounded-lg p-4 hover:border-sky-800 hover:shadow-lg transition duration-300`}
              >
                <img src={plan.img} className="-ml-10" alt={plan.name} />
                <p className="text-sm font-semibold mt-20 -ml-8 text-sky-800">{plan.name}</p>
                <p className="text-xs text-gray-600 -ml-10">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}/
                  {isYearly ? "yr" : "mo"}
                </p>
              </div>
            ))}
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8 bg-slate-200 rounded-md space-x-4">
            <p className={`text-sm ${!isYearly ? "text-sky-800 font-semibold" : "text-gray-500"}`}>
              Monthly
            </p>
            <div
              className="relative w-16 h-8 cursor-pointer rounded-full bg-sky-800"
              onClick={handleToggle}
            >
              <div
                className={`absolute top-0 left-0 w-8 h-8 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out ${
                  isYearly ? "transform translate-x-8" : ""
                }`}
              ></div>
            </div>
            <p className={`text-sm ${isYearly ? "text-sky-800 font-semibold" : "text-gray-500"}`}>
              Yearly
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-row mt-28">
            <div>
              <Link to="/" className="">
                Go Back
              </Link>
            </div>
            <button
              type="button"
              onClick={handleNextStep}
              className="text-sm py-2 px-3 bg-sky-800 float-right text-white font-medium rounded-lg hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-blue-300 ml-auto"
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
