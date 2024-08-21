import { useContext, useState, useEffect } from "react";
import Palette from "../components/Palette.jsx";
import { CaseContext } from "../CaseContext";
import { urlFor } from "../utils/urlFor.js";
import LoadingSkeleton from "../components/LoadingSkeleton.jsx";

const CaseColor = ({ cases, extensions }) => {
  const { selectedCase, setSelectedCase } = useContext(CaseContext);
  const [loadingColors, setLoadingColors] = useState(true);
  const [loadingExtensions, setLoadingExtensions] = useState(true);

  useEffect(() => {
    if (cases.length > 0) {
      setLoadingColors(false); // Set loading to false when color data is ready
    }
    if (extensions.length > 0) {
      setLoadingExtensions(false); // Set loading to false when extension data is ready
    }
  }, [cases, extensions]);

  const filteredCase = cases.filter(
    (caseItem) => selectedCase.size === caseItem.size
  );

  const caseColors =
    filteredCase.length > 0 ? filteredCase[0].colors || [] : [];

  return (
    <section className="flex flex-col md:flex-row w-full px-6 sm:px-12 xl:px-24">
      <div className="w-full lg:w-1/2 flex justify-center">
        <Palette />
      </div>
      <div className="flex flex-col w-full lg:w-1/2 md:pl-6 mt-12 md:mt-0 max-h-[480px] overflow-scroll">
        <div className="flex flex-col justify-center md:justify-start flex-wrap">
          {caseColors.length > 0 && (
            <h2 className="text-lg font-bold">Main color</h2>
          )}
          {loadingColors ? (
            <LoadingSkeleton
              width="100%"
              height="136px"
              imageHeight="96px"
              textHeight="16px"
            />
          ) : (
            <div className="flex flex-wrap gap-4 mt-3">
              {caseColors.map((color, index) => (
                <div
                  key={index}
                  className={`${
                    selectedCase.color?.image === urlFor(color.image)
                      ? `border-pink-500`
                      : ""
                  } flex flex-col items-center border rounded-lg cursor-pointer`}
                  onClick={() =>
                    setSelectedCase({
                      ...selectedCase,
                      color: {
                        name: color.color,
                        image: urlFor(color.image),
                      },
                    })
                  }
                >
                  <div
                    style={{
                      backgroundImage: `url(${urlFor(color.image)})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                    className="w-24 h-24 rounded-lg bg-gray-200"
                  ></div>
                  <p className="py-2 text-[.875em]">{color.color}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        {selectedCase.extension && (
          <div className="flex flex-col">
            {extensions.length > 0 && (
              <h2 className="mt-12 text-lg font-bold">Extension color</h2>
            )}
            {loadingExtensions ? (
              <LoadingSkeleton
                width="100%"
                height="136px"
                imageHeight="96px"
                textHeight="16px"
              />
            ) : (
              <div className="flex flex-wrap gap-4 mt-3">
                {extensions[0].colors.map((extension, index) => (
                  <div
                    key={index}
                    className={`${
                      selectedCase.extension?.image === urlFor(extension.image)
                        ? "border-pink-500"
                        : ""
                    } flex flex-col items-center border rounded-lg cursor-pointer`}
                    onClick={() =>
                      setSelectedCase({
                        ...selectedCase,
                        extension: {
                          image: urlFor(extension.image),
                          price: extensions[0].price,
                          color: extension.color,
                        },
                      })
                    }
                  >
                    <div
                      style={{
                        backgroundImage: `url(${urlFor(extension.image)})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                      className="w-24 h-24 rounded-lg bg-gray-200"
                    ></div>
                    <p className="py-2 text-[.875em]">{extension.color}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseColor;
