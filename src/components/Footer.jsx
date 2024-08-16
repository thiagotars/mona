import TotalPrice from "./TotalPrice";

const Footer = ({ selectedCase, steps, setStage, stage }) => {
  return (
    <div className="md:absolute md:bottom-0 md:mt-0 mt-12 w-full flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center py-8 px-4 md:px-12 xl:px-24 border-t">
      <TotalPrice selectedCase={selectedCase} />
      <div className="flex gap-6">
        {stage !== "size" && (
          <button
            className="py-2 px-8 w-[160px] bg-gray-100 rounded-full hover:text-white hover:bg-black transition duration-300"
            onClick={() => {
              if (selectedCase.price > 0 && stage !== "size") {
                setStage(steps[steps.indexOf(stage) - 1]);
              }
            }}
          >
            Prev step
          </button>
        )}

        <button
          className="py-3 px-8 w-[160px] bg-gray-100 rounded-full hover:bg-black hover:text-white transition duration-300"
          onClick={() => {
            if (selectedCase.price > 0 && stage !== "review") {
              setStage(steps[steps.indexOf(stage) + 1]);
            } else null;
          }}
        >
          {stage === "review" ? "Add to cart" : "Next step"}
        </button>
      </div>
    </div>
  );
};

export default Footer;
