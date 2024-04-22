import { useState } from "react";
import Filling from "./Filling";

const Paleta12 = ({ selectedCase }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Prepare container data with limited fillings
  const containerData = [
    selectedCase.fillings.slice(0, 6), // First 6 elements for container 1
    selectedCase.fillings.slice(6, 12), // Next 6 elements (from index 6 to 11) for container 2
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % containerData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + containerData.length) % containerData.length
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div // Current container based on currentIndex
        id="container"
        style={{ backgroundColor: `${selectedCase.color}` }}
        className={`w-[400px] h-[400px] p-12 rounded-2xl`}
      >
        <div className="w-full h-full bg-cor-blk rounded-md grid grid-cols-3 grid-rows-2 gap-[1px] p-[1px]">
          {containerData[currentIndex].map((filling, index) => (
            <Filling key={index} color={filling.color} />
          ))}
        </div>
      </div>
      <div className="flex mt-6 gap-6 justify-between py-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Prev
        </button>
        <div className="flex items-center">
          <div className="flex space-x-2">
            {containerData.map((_, index) => (
              <span
                key={index}
                className={`carousel-dot w-2 h-2 rounded-full bg-gray-400 opacity-50 ${
                  currentIndex === index ? "bg-gray-700 opacity-100" : ""
                }`}
              ></span>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Paleta12;
