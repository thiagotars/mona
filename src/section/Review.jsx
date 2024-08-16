import FillingCounter from "../components/FillingCounter";
import fillings from "../assets/fillings.png";
import extensionImage from "../assets/extension.png";
import { useState } from "react";

const PreviewSelection = ({ selectedCase }) => {
  const [isFillingsShowing, setIsFillingsShowing] = useState(true);

  const calculateFillings = () => {
    const totalPrice = selectedCase.fillings.reduce(
      (accumulator, current) => accumulator + current.price,
      0
    );
    return totalPrice;
  };
  console.log(selectedCase);
  return (
    <div className="flex flex-col md:flex-row w-full mt-16 px-4 sm:px-12 xl:px-24">
      <div className="flex flex-col w-full md:w-1/2 px-0 lg:px-12 gap-4">
        <div className="flex w-full justify-center">
          <div className="flex border w-full h-28 rounded-lg">
            <div
              className=" w-28 rounded-lg"
              style={{
                backgroundImage: `url(${selectedCase.images[1]})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="flex flex-col text-sm justify-center ml-4 py-2 gap-1">
              <h3 className="text-[16px]">{`Pallete ${selectedCase.size}`}</h3>
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
          <div className="flex border rounded-lg">
            <div
              className="min-w-28 rounded-lg"
              style={{
                backgroundImage: `url(${extensionImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
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
      <div className="pl-0 md:pl-6 w-full mt-4 md:mt-0 md:w-1/2">
        {selectedCase.fillings.length > 0 && (
          <div className="flex w-full justify-center">
            <div className="flex border w-full h-28 rounded-lg">
              <div
                className="min-w-28 rounded-lg"
                style={{
                  backgroundImage: `url(${fillings})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="w-full flex flex-col text-sm justify-center ml-4 py-2 pr-6 gap-1">
                <div className="flex justify-between">
                  <h3 className="text-[16px]">Fillings</h3>
                  <button onClick={() => setIsFillingsShowing((prev) => !prev)}>
                    <p className="underline text-pink-500">
                      {isFillingsShowing ? "hide" : "show"}
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
              {/* <div
                className="w-28 rounded-lg"
                style={{
                  backgroundImage: `url(${fillings})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div> */}
            </div>
          </div>
        )}
        {/* <h3 className="text-lg font-bold">Filling colors:</h3> */}
        {isFillingsShowing && <FillingCounter data={selectedCase} />}
      </div>
    </div>
  );
};

export default PreviewSelection;
