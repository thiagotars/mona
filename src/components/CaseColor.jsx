const CaseColor = ({ selectedCase, setSelectedCase }) => {
  return (
    <div className="">
      <h1 className="text-lg font-bold">Choose your case color:</h1>

      <div className="flex gap-3 mt-4">
        <button
          className={`${
            selectedCase.color === "yellow" ? "border-blue-500" : "black"
          } border px-6 py-3 rounded-lg`}
          onClick={() => setSelectedCase({ ...selectedCase, color: "yellow" })}
        >
          Yellow
        </button>
        <button
          className={`${
            selectedCase.color === "pink" ? "border-blue-500" : "black"
          } border px-6 py-3 rounded-lg`}
          onClick={() => setSelectedCase({ ...selectedCase, color: "pink" })}
        >
          Pink
        </button>
        <button
          className={`${
            selectedCase.color === "gray" ? "border-blue-500" : "black"
          } border px-6 py-3 rounded-lg`}
          onClick={() => setSelectedCase({ ...selectedCase, color: "gray" })}
        >
          Gray
        </button>
      </div>
    </div>
  );
};

export default CaseColor;
