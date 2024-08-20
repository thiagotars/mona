import { useState, useContext } from "react";
import { CaseContext } from "../CaseContext";
import { urlFor } from "../utils/urlFor";

const CaseSize = ({ cases, extensions, imagesLoaded }) => {
  const { selectedCase, setSelectedCase } = useContext(CaseContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const currentCase = selectedCase || {
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

  const handleCaseHover = (index) => {
    setHoveredIndex(index);
  };

  const handleCaseClick = (caseItem) => {
    const defaultExtension = caseItem.size === 12 ? extensions[0] : null;

    setSelectedCase({
      price: caseItem.price,
      size: caseItem.size,
      fillings: [],
      color: {
        name: caseItem.colors[0].color,
        image: urlFor(caseItem.colors[0].image),
      },
      extension: defaultExtension
        ? {
            name: defaultExtension.colors[0].color,
            image: urlFor(defaultExtension.colors[0].image),
            price: defaultExtension.price,
          }
        : null,
      images: caseItem.images,
    });
  };

  if (!imagesLoaded) {
    return (
      <div className="w-full flex justify-center items-center h-[480px]">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <section className="w-full flex flex-wrap mt-16 gap-6 justify-center items-center xl:px-24 md:px-12 px-6 md:max-h-[480px] overflow-scroll">
      {cases.map((caseItem, index) => (
        <div
          key={caseItem._id}
          className={`${
            caseItem.size === currentCase.size ? "border-pink-500" : "black"
          } border rounded-lg cursor-pointer`}
          onMouseEnter={() => handleCaseHover(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleCaseClick(caseItem)}
        >
          <div
            className="w-[320px] h-[320px] rounded-t-lg"
            style={{
              backgroundImage:
                index === hoveredIndex && caseItem.images[1]
                  ? `url(${urlFor(caseItem.images[1])})`
                  : `url(${urlFor(caseItem.images[0])})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="flex justify-between items-center px-6 py-4 border-t">
            <p className="font-semibold">{caseItem.size + " colors"}</p>
            <p className="font-semibold">
              {caseItem.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CaseSize;
