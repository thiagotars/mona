// CaseContext.jsx
import React, { createContext, useState } from "react";

export const stepTitles = {
  0: "Choose a Case Size",
  1: "Choose a Case Color",
  2: "Choose Your Fillings",
  3: "Review Your Palette",
};

const defaultCase = {
  price: 0,
  size: null,
  fillings: [],
  color: {
    name: "",
    image: "",
  },
  extension: null,
  images: [],
};

export const CaseContext = createContext({
  currentStep: 0,
  setCurrentStep: () => {},
  getStepTitle: () => "",
  selectedCase: defaultCase,
  setSelectedCase: () => {},
});

export function CaseContextProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCase, setSelectedCase] = useState(defaultCase);

  const getStepTitle = () => stepTitles[currentStep] || "";

  return (
    <CaseContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        getStepTitle,
        selectedCase,
        setSelectedCase,
      }}
    >
      {children}
    </CaseContext.Provider>
  );
}
