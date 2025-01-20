import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserSelection } from "../context/UserSelectionContext";

const FinishingUp = () => {
  const { selection } = useUserSelection();
  const selectedAddOns = selection.addOns || [];

  const addOns = [
    {
      id: "addon1",
      title: "Online Service",
      price: "+$1/mo",
    },
    {
      id: "addon2",
      title: "Larger Storage",
      price: "+$2/mo",
    },
    {
      id: "addon3",
      title: "Customizable Profile",
      price: "+$2/mo",
    },
  ];

  const getAddOnDetails = (id) => addOns.find((addon) => addon.id === id);

  const totalAddOnPrice = selectedAddOns.reduce((total, addOnId) => {
    const addOn = getAddOnDetails(addOnId);
    return total + parseInt(addOn.price.replace(/[^0-9]/g, ""), 10);
  }, 0);

  const planPrice = selection.plan?.price
    ? typeof selection.plan.price === "string"
      ? parseInt(selection.plan.price.replace(/[^0-9]/g, ""), 10)
      : selection.plan.price
    : 0;

  const totalPrice = totalAddOnPrice + planPrice;

  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/thank-you");
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100">
      {/* Mobile Sidebar */}
      <div className="lg:hidden w-full">
        <div className="relative">
          <img
            src="/images/bg-sidebar-mobile.svg"
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
                  className={`w-8 h-8 flex items-center justify-center border border-white text-white rounded-full hover:bg-blue-300 hover:text-black ${
                    step === 4 ? "bg-sky-100 text-black" : ""
                  }`}
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
        {/* Desktop Sidebar */}
        <div className="hidden lg:block lg:w-1/2 mb-4 lg:mb-0 relative">
          <img
            src="/images/bg-sidebar-desktop.svg"
            alt="Desktop Sidebar"
            className="rounded-lg object-cover"
          />
          <div className="absolute top-8 left-8 flex flex-col space-y-8">
            {[1, 2, 3, 4].map((step) => (
              <div className="flex items-start space-x-4" key={step}>
                <Link
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
                    className={`w-8 h-8 flex items-center justify-center border border-white text-white rounded-full hover:bg-blue-300 hover:text-black ${
                      step === 4 ? "bg-sky-100 text-black" : ""
                    }`}
                  >
                    {step}
                  </button>
                </Link>
                <div>
                  <p className="text-sm text-gray-300">STEP {step}</p>
                  <p className="text-sm font-semibold text-white">
                    {
                      ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"][
                        step - 1
                      ]
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-white shadow-lg lg:shadow-none -mt-20 lg:mt-0 rounded-lg p-6 w-full lg:-ml-24 max-w-lg">
          <h2 className="text-2xl font-semibold text-sky-800 mb-2">
            Finishing Up
          </h2>
          <p className="text-gray-600 mb-6">
            Double-check everything before confirming.
          </p>

          {/* Plan Details */}
          <div className="mb-6">
            <div className="flex justify-between items-start">
              <p className="text-sm font-semibold text-gray-800">
                {selection.plan?.name}
              </p>
              <p className="text-sm font-semibold text-gray-800">
                ${selection.plan?.price}/
                {selection.plan?.type === "Yearly" ? "yr" : "mo"}
              </p>
            </div>
            <Link
              to="/select-card"
              className="text-blue-600 text-sm hover:underline"
            >
              Change
            </Link>
          </div>

          {/* Add-Ons List */}
          <div className="space-y-6 mb-6">
            {selectedAddOns.length > 0 ? (
              selectedAddOns.map((addOnId) => {
                const addOn = getAddOnDetails(addOnId);
                return (
                  <div
                    key={addOnId}
                    className="flex justify-between items-start"
                  >
                    <p className="text-sm font-semibold text-gray-800">
                      {addOn.title}
                    </p>
                    <p className="text-sm font-semibold text-gray-800">
                      {addOn.price}
                    </p>
                  </div>
                );
              })
            ) : (
              <p className="text-sm text-gray-600">No add-ons selected.</p>
            )}
          </div>

          {/* Total Price */}
          <div className="flex justify-between border-t border-gray-300 pt-4">
            <p className="text-sm font-semibold text-gray-800">
              Total (per month)
            </p>
            <p className="text-lg font-bold text-gray-900">+${totalPrice}/mo</p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-row mt-10">
            <Link to="/pick-addons" className="text-sm text-gray-600">
              Go Back
            </Link>
            <button
              type="button"
              onClick={handleConfirm}
              className="text-sm py-2 px-3 bg-sky-800 text-white font-medium rounded-lg hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-blue-300 ml-auto"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishingUp;
