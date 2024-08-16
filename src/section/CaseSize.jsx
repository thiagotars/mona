import { cases } from "../data.js";
import { useState } from "react";

const CaseSize = ({ setSelectedCase, selectedCase }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCaseHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <section className="w-full flex flex-wrap mt-16 gap-6 justify-center items-center xl:px-24 md:px-12 px-6 md:max-h-[480px] overflow-scroll">
      {cases.map((caseItem, index) => {
        return (
          //  Case size options
          <div
            key={caseItem.id}
            className={`${
              caseItem.size === selectedCase.size ? "border-pink-500" : "black"
            } border rounded-lg cursor-pointer`}
            onMouseEnter={() => handleCaseHover(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() =>
              setSelectedCase({
                price: caseItem.price,
                size: caseItem.size,
                fillings: [],
                color: {
                  name: caseItem.colors[0].name,
                  image: caseItem.colors[0].image,
                },
                extension:
                  caseItem.size === 12
                    ? {
                        name: caseItem.extensions[0].name,
                        image: caseItem.extensions[0].image,
                        price: caseItem.extensions[0].price,
                      }
                    : null,
                images: caseItem.images,
              })
            }
          >
            {/* Card Image */}
            <div
              className="w-[320px] h-[320px] rounded-t-lg"
              style={{
                backgroundImage:
                  index === hoveredIndex
                    ? `url(${caseItem.images[1]})`
                    : `url(${caseItem.images[0]})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            {/* Card Text */}
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
        );
      })}
    </section>
  );
};

export default CaseSize;
