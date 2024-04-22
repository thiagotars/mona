const CaseSize = ({ selectedCase, setSelectedCase }) => {
  return (
    <div className="mt-12">
      <h1 className="text-lg font-bold">Choose your case size:</h1>
      <div className="flex gap-3 mt-4">
        <button
          className={`${
            selectedCase.slots === 2 ? "border-blue-500" : "black"
          } border px-6 py-3 rounded-lg`}
          onClick={() =>
            setSelectedCase({ ...selectedCase, slots: 2, price: 100 })
          }
        >
          2 colors
        </button>
        <button
          className={`${
            selectedCase.slots === 6 ? "border-blue-500" : "black"
          } border px-6 py-3 rounded-lg`}
          onClick={() =>
            setSelectedCase({ ...selectedCase, slots: 6, price: 140 })
          }
        >
          6 colors
        </button>
        <button
          className={`${
            selectedCase.slots === 12 ? "border-blue-500" : "black"
          } border px-6 py-3 rounded-lg`}
          onClick={() =>
            setSelectedCase({ ...selectedCase, slots: 12, price: 240 })
          }
        >
          12 colors
        </button>
      </div>
    </div>
  );
};

export default CaseSize;
