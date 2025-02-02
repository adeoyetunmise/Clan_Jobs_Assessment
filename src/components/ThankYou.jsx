import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-8 relative">
      {/* Mobile Background Image */}
      <div className="lg:hidden absolute top-0 left-0 w-full z-0">
        <img
          src="/images/bg-sidebar-mobile.svg"
          alt="Mobile Sidebar"
          className="w-full h-40 object-cover mx-auto" 
        />
      </div>

      {/* Mobile Steps on Top of the Image */}
      <div className="lg:hidden absolute top-2 left-1/2 transform -translate-x-1/2 flex justify-around space-x-4 z-10">
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
            <button className="w-8 h-8 flex items-center justify-center border border-white text-white rounded-full  hover:bg-blue-300 hover:text-black">
              {step}
            </button>
          </Link>
        ))}
      </div>

      {/* Card that overlays the image */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full  max-w-4xl z-10 flex flex-col lg:flex-row relative mt-1 lg:mt-0">
        {/* Desktop Layout with Image */}
        <div className="hidden lg:block lg:w-1/2 mb-4 lg:mb-0 relative">
          {/* Desktop Background Image */}
          <img
            src="/images/bg-sidebar-desktop.svg" 
            alt="Desktop Sidebar"
            className="rounded-lg object-cover"
          />
          {/* Desktop Steps Layout */}
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
                  <button className="w-8 h-8 flex items-center justify-center border border-white text-white rounded-full hover:bg-blue-300 hover:text-black">
                    {step}
                  </button>
                </Link>
                <div>
                  <p className="text-sm text-left text-gray-300">STEP {step}</p>
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

        {/* Right Section: Logo and Paragraph */}
        <div className="lg:w-1/2 w-full p-4 mt-16 lg:p-8 flex lg:-ml-12 flex-col items-center justify-center">
          {/* Space for Logo */}
          <img
            src="/images/icon-thank-you.svg" 
            alt="Logo"
            className="w-20 h-20 lg:w-24 lg:h-24 mb-6"
          />

          {/* Centered Paragraph */}
          <p className="text-gray-600 text-center text-sm lg:text-lg">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
