import { useEffect, useState } from "react";
import TotalPrice from "../components/TotalPrice";

const FillingSection = ({ setStage, selectedCase, setSelectedCase }) => {
  const colors = [
    {
      id: 1,
      name: "amarelo",
      color: "cor-ylw",
      price: 25,
      image: "",
      units: 0,
    },
    {
      id: 2,
      name: "azul",
      color: "cor-blu",
      price: 25,
      image: "",
      units: 0,
    },
    {
      id: 3,
      name: "branco",
      color: "cor-wht",
      price: 25,
      image: "",
      units: 0,
    },
    {
      id: 4,
      name: "lilas",
      color: "cor-prp",
      price: 25,
      image: "",
      units: 0,
    },
    {
      id: 5,
      name: "marrom",
      color: "cor-brw",
      price: 25,
      image: "",
      units: 0,
    },
    {
      id: 6,
      name: "rosa",
      color: "cor-pnk",
      price: 25,
      image: "",
      units: 0,
    },
    {
      id: 7,
      name: "rosso",
      color: "cor-rss",

      price: 25,
      image: "",
      units: 0,
    },
    {
      id: 8,
      name: "turquesa",
      color: "cor-trq",

      price: 25,
      image: "",
      units: 0,
    },
    {
      id: 9,
      name: "verde",
      color: "cor-grn",

      price: 25,
      image: "",
      units: 0,
    },
    {
      id: 10,
      name: "garance",
      color: "cor-gar",

      price: 25,
      image: "",
      units: 0,
    },
    {
      id: 11,
      name: "urucum",
      color: "cor-uru",

      price: 25,
      image: "",
      units: 0,
    },
  ];
  const [fillingList, setFillingList] = useState([]);

  const fillingCounter = (item) => {
    const filteredList = fillingList.filter(
      (filling) => filling.id === item.id
    );
    return filteredList.length;
  };

  useEffect(() => {
    setSelectedCase({ ...selectedCase, fillings: fillingList });
  }, [fillingList]);

  const removeFirstMatch = (itemToRemove) => {
    const indexOfMatch = fillingList.findIndex(
      (item) => item.id === itemToRemove.id
    );

    if (indexOfMatch !== -1) {
      const updatedFillingList = [
        ...fillingList.slice(0, indexOfMatch), // Include elements before the match
        ...fillingList.slice(indexOfMatch + 1), // Include elements after the match (skipping the first match)
      ];
      setFillingList(updatedFillingList);
    } else {
      console.log(`Item "${itemToRemove}" not found in the list.`); // Handle item not found scenario (optional)
    }
  };

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-lg font-bold">Choose your filling colors:</h1>

      <div className="grid grid-cols-2 gap-3 mt-4">
        {colors.map((color) => {
          return (
            <div
              key={color.id}
              className={`flex justify-between items-center border px-4 py-4 rounded-lg`}
            >
              <div className="flex gap-2 items-center justify-between">
                <button
                  className="text-xl w-6 h-6 flex justify-center items-center pb-1 bg-slate-100 rounded-full"
                  onClick={() => {
                    if (fillingList.length < selectedCase.slots) {
                      setFillingList([...fillingList, color]);
                    } else return;
                  }}
                >
                  +
                </button>
                <p className="" id="count">
                  {fillingCounter(color)}
                </p>
                <button
                  className="text-xl w-6 h-6 flex justify-center items-center pb-1 bg-slate-100 rounded-full"
                  onClick={() => removeFirstMatch(color)}
                >
                  -
                </button>
              </div>
              {color.name}
            </div>
          );
        })}
      </div>
      <TotalPrice selectedCase={selectedCase} />

      <div className="flex gap-6 flex-wrap mt-20">
        <button
          className="px-6 py-3 bg-blue-400 rounded-lg text-cor-wht"
          onClick={() => {
            setStage("review");
          }}
        >
          Review purchase
        </button>

        <button
          className="px-6 py-3 bg-green-400 rounded-lg text-cor-wht"
          onClick={() => {
            setStage("case");
            setSelectedCase({ ...selectedCase, fillings: [] });
          }}
        >
          Back to case
        </button>
      </div>
    </div>
  );
};

export default FillingSection;
