import React from "react";
import { Link } from "react-router-dom";
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

  const totalPrice = selectedAddOns.reduce((total, addOnId) => {
    const addOn = getAddOnDetails(addOnId);
    return total + parseInt(addOn.price.replace(/[^0-9]/g, ""), 10);
  }, 0);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl flex flex-col lg:flex-row">
        {/* Sidebar Section */}
        <div className="lg:w-1/2 mb-4 lg:mb-0 relative">
          <img
            src="/src/assets/bg-sidebar-desktop.svg"
            alt="Sidebar"
            className="rounded-lg object-cover"
          />
          <div className="absolute top-8 left-8 flex flex-col space-y-8">
            <div className="flex items-start space-x-4">
              <Link to="/">
                <button className="w-8 h-8 flex items-center justify-center border border-white text-white rounded-full hover:bg-blue-300 hover:text-black">
                  1
                </button>
              </Link>
              <div>
                <p className="text-sm text-gray-300">STEP 1</p>
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
                <p className="text-sm text-gray-300">STEP 2</p>
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
                <p className="text-sm text-gray-300">STEP 3</p>
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
                <p className="text-sm text-gray-300">STEP 4</p>
                <p className="text-sm font-semibold text-white">SUMMARY</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="lg:w-1/2 w-full p-8 text-left flex flex-col -ml-20 mt-7">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Finishing Up</h2>
          <p className="text-gray-600 mb-6">Double-check everything before confirming.</p>

          {/* Plan Details */}
          <div className="mb-6">
            <div className="flex justify-between items-start">
              <p className="text-sm font-semibold text-gray-800">{selection.plan?.name}</p>
              <p className="text-sm font-semibold text-gray-800">
                ${selection.plan?.price}/{selection.plan?.type === "Yearly" ? "yr" : "mo"}
              </p>
            </div>
            <Link to="/select-card" className="text-blue-600 text-sm hover:underline">
              Change
            </Link>
          </div>

          {/* Add-Ons List */}
          <div className="space-y-6 mb-6">
            {selectedAddOns.length > 0 ? (
              selectedAddOns.map((addOnId) => {
                const addOn = getAddOnDetails(addOnId);
                return (
                  <div key={addOnId} className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{addOn.title}</p>
                      <Link to="/pick-addons" className="text-blue-600 text-sm hover:underline">
                        Change
                      </Link>
                    </div>
                    <p className="text-sm font-semibold text-gray-800">{addOn.price}</p>
                  </div>
                );
              })
            ) : (
              <p className="text-sm text-gray-600">No add-ons selected.</p>
            )}
          </div>

          {/* Total Price */}
          <div className="flex justify-between border-t border-gray-300 pt-4">
            <p className="text-sm font-semibold text-gray-800">Total (per month)</p>
            <p className="text-lg font-bold text-gray-900">+${totalPrice}/mo</p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <Link to="/pick-addons" className="text-blue-600 hover:underline">
              Go Back
            </Link>
            <button
              type="button"
              className="text-sm py-2 px-3 bg-sky-800 text-white font-medium rounded-lg hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
