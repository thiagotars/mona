import { useContext } from "react";
import { CaseContext } from "../CaseContext";

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

export const useCase = () => {
  const { selectedCase, setSelectedCase } = useContext(CaseContext);

  // Ensure selectedCase is always a valid object
  const caseValue = selectedCase || defaultCase;

  return { selectedCase: caseValue, setSelectedCase };
};
