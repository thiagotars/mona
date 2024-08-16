import { colors } from "../data";
import Palette from "../components/Palette";

const FillingSection = ({ selectedCase, setSelectedCase }) => {
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
          {colors.map((color) => {
            return (
              <div key={color.id} className={`flex flex-col items-center`}>
                <button className="rounded-lg pb-1">
                  <div
                    className="flex gap-2 items-center justify-between  w-[80px] h-[120px]  rounded-lg"
                    style={{
                      backgroundImage: `url(${color.image})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                    onClick={() => {
                      if (selectedCase.fillings.length < selectedCase.size) {
                        setSelectedCase({
                          ...selectedCase,
                          fillings: [...selectedCase.fillings, color],
                        });
                      } else return;
                    }}
                  ></div>
                  <p className="text-sm mt-1">{color.name}</p>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FillingSection;
