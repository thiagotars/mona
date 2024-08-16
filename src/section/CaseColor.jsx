import Palette from "../components/Palette.jsx";
import { cases } from "../data.js";

const CaseColor = ({ selectedCase, setSelectedCase }) => {
  const filteredCase = cases.filter(
    (caseItem) => selectedCase.size === caseItem.size
  );

  const caseColors = filteredCase[0].colors;
  const caseExtensions = filteredCase[0].extensions || null;
  console.log(caseColors, caseExtensions);
  return (
    <section className="flex flex-col md:flex-row w-full mt-16 px-6 sm:px-12 xl:px-24">
      {/* Palette model */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Palette
          setSelectedCase={setSelectedCase}
          selectedCase={selectedCase}
        />
      </div>
      {/* Color options */}
      <div className="flex flex-col w-full lg:w-1/2 md:pl-6 mt-12 md:mt-0 max-h-[480px] overflow-scroll">
        <div className="flex flex-col justify-center md:justify-start flex-wrap">
          {/* Main color title for 12 colors palettes */}
          {caseExtensions && <h2 className="text-lg font-bold">Main color</h2>}
          {/* Color cards */}
          <div className="flex flex-wrap gap-4 mt-3">
            {caseColors.map((color, index) => {
              return (
                // color container
                <div
                  key={index}
                  className={`${
                    selectedCase.color.name === color.name
                      ? `border-pink-500`
                      : "black"
                  } flex flex-col items-center border rounded-lg cursor-pointer`}
                  onClick={() =>
                    setSelectedCase({
                      ...selectedCase,
                      color: { name: color.name, image: color.image },
                    })
                  }
                >
                  {/* Color image */}
                  <div
                    style={{
                      backgroundImage: `url(${color.image})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                    className="w-24 h-24 rounded-lg"
                  ></div>
                  {/* Color name */}
                  <p className="py-2">{color.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* Extension color options */}
        <div className="flex flex-col">
          {/* Extension title */}
          {caseExtensions && (
            <h2 className="mt-12 text-lg font-bold">Extension color</h2>
          )}
          {/* Extension color cards */}
          <div className="flex flex-wrap gap-4 mt-3">
            {caseExtensions &&
              caseExtensions.map((color, index) => {
                console.log(color);
                return (
                  // extension container
                  <div
                    key={index}
                    className={`${
                      selectedCase.extension.name === color.name
                        ? "border-pink-500"
                        : "black"
                    } flex flex-col items-center border rounded-lg cursor-pointer`}
                    onClick={() =>
                      setSelectedCase({
                        ...selectedCase,
                        extension: {
                          name: color.name,
                          image: color.image,
                          price: color.price,
                        },
                      })
                    }
                  >
                    {/* Extension image */}
                    <div
                      style={{
                        backgroundImage: `url(${color.image})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                      className="w-24 h-24 rounded-lg"
                    ></div>
                    {/* Extension name */}
                    <p className="py-2">{color.name}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseColor;
