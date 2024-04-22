import FillingCounter from "../components/FillingCounter";
import TotalPrice from "../components/TotalPrice";

const PreviewSelection = ({ setStage, selectedCase }) => {
  const fillingColor = selectedCase.fillings.map((color) => color);
  console.log(fillingColor);

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-lg font-bold">Review your purchase:</h1>

      <div className="mt-14">
        <p>{"Paleta" + " " + selectedCase.slots}</p>
        <FillingCounter data={fillingColor} />
      </div>

      <TotalPrice selectedCase={selectedCase} />

      <div className="flex gap-6 flex-wrap mt-20">
        <button
          className="px-6 py-3 bg-blue-400 text-cor-wht rounded-lg"
          onClick={() => {
            // setStage("review");
          }}
        >
          Add to cart
        </button>

        <button
          className="px-6 py-3 bg-green-400 text-cor-wht rounded-lg"
          onClick={() => {
            setStage("fillings");
          }}
        >
          Back to fillings
        </button>
      </div>
    </div>
  );
};

export default PreviewSelection;
