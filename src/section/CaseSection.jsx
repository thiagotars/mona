import CaseSize from "../components/CaseSize";
import CaseColor from "../components/CaseColor";
import TotalPrice from "../components/TotalPrice";

const CaseSection = ({
  setTotalPrice,
  setStage,
  selectedCase,
  setSelectedCase,
}) => {
  return (
    <div className="w-full">
      <CaseColor
        selectedCase={selectedCase}
        setSelectedCase={setSelectedCase}
      />

      <CaseSize
        setTotalPrice={setTotalPrice}
        selectedCase={selectedCase}
        setSelectedCase={setSelectedCase}
      />

      <TotalPrice selectedCase={selectedCase} />

      <div className="mt-20">
        {/* <h1 className="text-lg font-bold">Want to add fillings?</h1> */}
        {/* <div className="flex gap-6 mt-6"> */}
        <button
          className="px-6 py-3 bg-blue-400 rounded-lg text-cor-wht"
          onClick={() => {
            selectedCase.color && selectedCase.slots
              ? setStage("fillings")
              : console.log("Please select a case size and color");
          }}
        >
          Add fillings
        </button>
        {/* <button
            className="px-6 py-3 bg-green-400 rounded-lg text-cor-wht"
            onClick={() => setStage("review")}
          >
            No, review your purchase
          </button> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default CaseSection;
