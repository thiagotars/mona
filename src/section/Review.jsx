import { useContext, useState, useEffect } from "react";
import { CaseContext } from "../CaseContext";
import FillingCounter from "../components/FillingCounter";
import { urlFor } from "../utils/urlFor";

const PreviewSelection = ({ fillings, extensions }) => {
  const { selectedCase } = useContext(CaseContext);
  const [isFillingsShowing, setIsFillingsShowing] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState({
    caseImage: false,
    extensionImage: !selectedCase.extension,
    fillingImage: false,
  });

  useEffect(() => {
    // Function to check if all images are loaded
    const checkImagesLoaded = () => {
      const totalImages =
        2 + (selectedCase.extension ? 1 : 0) + (fillings.length > 0 ? 1 : 0);
      const loadedImages = Object.values(imagesLoaded).filter(Boolean).length;

      if (loadedImages === totalImages) {
        setImagesLoaded((prevState) => ({
          ...prevState,
          allImagesLoaded: true,
        }));
      }
    };

    // Load case image
    const caseImg = new Image();
    caseImg.src = urlFor(selectedCase.images[1]).toString();
    caseImg.onload = () => {
      setImagesLoaded((prevState) => ({ ...prevState, caseImage: true }));
      checkImagesLoaded();
    };

    // Load extension image if applicable
    if (selectedCase.extension) {
      const extImg = new Image();
      extImg.src = urlFor(extensions[0].image).toString();
      extImg.onload = () => {
        setImagesLoaded((prevState) => ({
          ...prevState,
          extensionImage: true,
        }));
        checkImagesLoaded();
      };
    }

    // Load filling image if applicable
    if (fillings.length > 0) {
      const fillImg = new Image();
      fillImg.src = urlFor(fillings[0].image).toString();
      fillImg.onload = () => {
        setImagesLoaded((prevState) => ({ ...prevState, fillingImage: true }));
        checkImagesLoaded();
      };
    }
  }, [selectedCase, extensions, fillings]);

  const calculateFillings = () => {
    const totalPrice = selectedCase.fillings.reduce(
      (accumulator, current) => accumulator + current.price,
      0
    );
    return totalPrice;
  };

  return (
    <div className="flex flex-col md:flex-row w-full mt-16 px-4 sm:px-12 xl:px-24">
      {/* Case details */}
      <div className="flex flex-col w-full md:w-1/2 px-0 lg:px-12 gap-4">
        <div className="flex w-full justify-center">
          <div className="flex border w-full h-28 rounded-lg">
            {!imagesLoaded.caseImage ? (
              <div className="w-28 rounded-lg bg-gray-200 flex items-center justify-center">
                <p>Loading...</p>
              </div>
            ) : (
              <div
                className="w-28 rounded-lg"
                style={{
                  backgroundImage: `url(${urlFor(selectedCase.images[1])})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            )}
            <div className="flex flex-col text-sm justify-center ml-4 py-2 gap-1">
              <h3 className="text-[16px]">{`Palette ${selectedCase.size}`}</h3>
              <div className="flex mt-2">
                <p>Color:</p>
                <p className="ml-2">{selectedCase.color.name}</p>
              </div>
              <div className="flex">
                <p className="text-sm font-semibold">
                  {selectedCase.extension
                    ? (
                        selectedCase.price - selectedCase.extension.price
                      ).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })
                    : selectedCase.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {selectedCase.extension && (
          <div className="flex border rounded-lg h-28">
            {!imagesLoaded.extensionImage ? (
              <div className="min-w-28 rounded-lg bg-gray-200 flex items-center justify-center">
                <p>Loading...</p>
              </div>
            ) : (
              <div
                className="min-w-28 rounded-lg"
                style={{
                  backgroundImage: `url(${urlFor(extensions[0].image)})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            )}
            <div className="flex flex-col text-sm justify-center ml-4 py-2 gap-1">
              <h3 className="text-[16px]">Extension</h3>
              <div className="flex mt-2">
                <p>Color:</p>
                <p className="ml-2">{selectedCase.extension.name}</p>
              </div>
              <div className="flex">
                <p className="text-sm font-semibold">
                  {selectedCase.extension.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fillings details */}
      <div className="pl-0 md:pl-6 w-full mt-4 md:mt-0 md:w-1/2">
        {selectedCase.fillings.length > 0 && (
          <div className="flex w-full justify-center">
            <div className="flex border w-full h-28 rounded-lg">
              {!imagesLoaded.fillingImage ? (
                <div className="min-w-28 rounded-lg bg-gray-200 flex items-center justify-center">
                  <p>Loading...</p>
                </div>
              ) : (
                <div
                  className="min-w-28 rounded-lg"
                  style={{
                    backgroundImage: `url(${urlFor(fillings[0].image)})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              )}
              <div className="w-full flex flex-col text-sm justify-center ml-4 py-2 pr-6 gap-1">
                <div className="flex justify-between">
                  <h3 className="text-[16px]">Fillings</h3>
                  <button onClick={() => setIsFillingsShowing((prev) => !prev)}>
                    <p className="underline text-pink-500">
                      {isFillingsShowing ? "Hide" : "Show"}
                    </p>
                  </button>
                </div>
                <div className="flex mt-2">
                  <p>Units:</p>
                  <p className="ml-2">{`${selectedCase.fillings.length}`}</p>
                </div>
                <div className="flex">
                  <p className="text-sm font-semibold">
                    {calculateFillings().toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {isFillingsShowing && <FillingCounter data={selectedCase} />}
      </div>
    </div>
  );
};

export default PreviewSelection;
