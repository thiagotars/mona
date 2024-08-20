import React, { useContext, useState, useEffect } from "react";
import TotalPrice from "./TotalPrice";
import { CaseContext, stepTitles } from "../CaseContext";

const Footer = () => {
  // Destructure the necessary values from the context
  const { selectedCase, currentStep, setCurrentStep } = useContext(CaseContext);

  // State to manage message visibility and content
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  // Handle previous step
  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Handle next step
  const handleNextStep = () => {
    console.log("Current Step:", currentStep); // Debugging log
    console.log("Case Size:", selectedCase.size); // Debugging log

    if (currentStep === 0 && !selectedCase.size) {
      setMessage("Choose a case size");
      setShowMessage(true);
      return; // Prevent further action if case size is not selected
    }

    if (currentStep < Object.keys(stepTitles).length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setMessage("Sorry, button still not working");
      setShowMessage(true);
    }
  };

  // Automatically hide the message after 3 seconds
  useEffect(() => {
    let timer;
    if (showMessage) {
      timer = setTimeout(() => {
        setShowMessage(false);
        setMessage(""); // Clear message after hiding
      }, 2000);
    }
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [showMessage]);

  // Determine the button text
  const isLastStep = currentStep === Object.keys(stepTitles).length - 1;
  const buttonText = isLastStep ? "Add to cart" : "Next step";

  return (
    <div className="md:absolute md:bottom-0 md:mt-0 mt-12 w-full flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center py-8 px-4 md:px-12 xl:px-24 border-t relative">
      <TotalPrice selectedCase={selectedCase} />
      <div className="flex gap-6 relative">
        {currentStep > 0 && (
          <button
            className="py-2 px-8 w-[160px] bg-gray-100 rounded-full hover:text-white hover:bg-black transition duration-300"
            onClick={handlePrevStep}
          >
            Prev step
          </button>
        )}
        <button
          className="py-3 px-8 w-[160px] bg-gray-100 rounded-full hover:bg-black hover:text-white transition duration-300"
          onClick={handleNextStep}
        >
          {buttonText}
        </button>
        {/* Conditionally render the message */}
        {showMessage && (
          <div className="absolute top-[-80px] left-0 w-full text-red-500 font-semibold bg-white drop-shadow-md text-[.815em] text-center py-2 rounded">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
