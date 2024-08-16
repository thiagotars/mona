import { useState, useEffect } from "react";
import Filling from "./Filling";
import pin from "../assets/pin.png";

const Palette = ({ selectedCase, setSelectedCase }) => {
  console.log(selectedCase);
  const [currentPalleteView, setCurrentPalleteView] = useState(
    selectedCase.size === 12 ? "middle" : "bottom"
  );

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const removeItem = (itemToRemove) => {
    console.log(itemToRemove);
    const indexToRemove = selectedCase.fillings.findIndex(
      (item) => item.id === itemToRemove.id
    );
    if (indexToRemove !== -1) {
      console.log(indexToRemove);
      const updatedFillingList = [
        ...selectedCase.fillings.slice(0, indexToRemove),
        ...selectedCase.fillings.slice(indexToRemove + 1),
      ];
      console.log(updatedFillingList);
      setSelectedCase({ ...selectedCase, fillings: updatedFillingList });
    }
    console.log(selectedCase);
  };

  let palleteStructure;

  if (selectedCase.size === 12) {
    palleteStructure = [
      { name: "Top" },
      {
        name: "Middle",
        fillings: selectedCase.fillings.slice(0, 6),
      },
      {
        name: "Bottom",
        fillings: selectedCase.fillings.slice(6, 12),
      },
    ];
  } else {
    palleteStructure = [
      { name: "Top" },
      {
        name: "Bottom",
        fillings: selectedCase.fillings,
      },
    ];
  }

  const palleteStyles = {
    container: {
      backgroundImage:
        currentPalleteView === "top" || currentPalleteView === "bottom"
          ? `url(${selectedCase.color.image})`
          : selectedCase.extension?.image
          ? `url(${selectedCase.extension.image})`
          : "",
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: selectedCase.size === 2 ? "248px" : isMobile ? "320px" : "400px",
      height: selectedCase.size === 2 ? "296px" : isMobile ? "320px" : "400px",
    },
    inside: {
      display: "grid",
      gridTemplateColumns:
        selectedCase.size === 2 ? "" : "repeat(3, minmax(0, 1fr))",
      gridTemplateRows: "repeat(2, minmax(0, 1fr))",
    },
  };

  return (
    <div className="relative flex flex-col items-center">
      <div // Current container based on currentIndex
        id="container"
        style={palleteStyles.container}
        // w-[248px] h-[296px]
        className={`p-10 sm:p-12 rounded-2xl`}
      >
        <div
          className="absolute top-2 mx-auto inset-0 w-11 h-11 z-30"
          style={{
            backgroundImage: currentPalleteView === "top" && `url(${pin})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        {currentPalleteView.toLowerCase() !== "top" && (
          <div
            style={palleteStyles.inside}
            className="w-full h-full bg-black rounded-md gap-[1px] p-[1px]"
          >
            {palleteStructure.map((view) => {
              if (view.name.toLowerCase() === currentPalleteView) {
                return view.fillings.map((filling, index) => {
                  return (
                    <Filling
                      key={index}
                      filling={filling}
                      removeItem={removeItem}
                    />
                  );
                });
              }
            })}
          </div>
        )}
      </div>
      <div className="flex items-center mt-2 gap-6 justify-between py-4 text-sm">
        <div className="flex border rounded-full bg-gray-100">
          {palleteStructure.map((view, index) => (
            <div
              style={{
                backgroundColor:
                  currentPalleteView === view.name.toLocaleLowerCase()
                    ? "white"
                    : "transparent",
              }}
              key={index}
              className="flex justify-center items-center py-2 px-2 rounded-full w-20 cursor-pointer"
              onClick={() =>
                setCurrentPalleteView(view.name.toLocaleLowerCase())
              }
            >
              <p>{view.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Palette;
