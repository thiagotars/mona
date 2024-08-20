import { useContext } from "react";
import { CaseContext } from "../CaseContext";
import Palette from "../components/Palette";
import { urlFor } from "../utils/urlFor";
import { v4 as uuidv4 } from "uuid";

const FillingSection = ({ fillings }) => {
  const { selectedCase, setSelectedCase } = useContext(CaseContext);
  const fillingColors = fillings[0].colors;

  return (
    <div className="flex flex-col md:flex-row w-full mt-16 px-4 sm:px-12 xl:px-24">
      <div className="w-full lg:w-1/2 flex justify-center">
        <Palette
          selectedCase={selectedCase}
          setSelectedCase={setSelectedCase}
        />
      </div>

      <div className="flex flex-col w-full lg:w-1/2 md:pl-6 mt-12 md:mt-0 max-h-[480px] overflow-scroll">
        <div className="flex justify-center md:justify-start flex-wrap gap-4">
          {fillingColors.map((filling) => (
            <div key={filling._id} className="flex flex-col items-center">
              <button className="rounded-lg pb-1">
                <div
                  className="flex gap-2 items-center justify-between w-[80px] h-[120px] rounded-lg"
                  style={{
                    backgroundImage: `url(${urlFor(filling.image)})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  onClick={() => {
                    if (selectedCase.fillings.length < selectedCase.size) {
                      let newFilling = { ...filling, _id: uuidv4() };

                      setSelectedCase({
                        ...selectedCase,
                        fillings: [...selectedCase.fillings, newFilling],
                      });
                    }
                  }}
                ></div>
                <p className="text-sm mt-1">{filling.name}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FillingSection;
