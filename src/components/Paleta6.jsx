import Filling from "./Filling";

const Paleta6 = ({ selectedCase }) => {
  console.log(selectedCase.fillings);
  return (
    <div
      style={{ backgroundColor: `${selectedCase.color}` }}
      className={`w-[400px] h-[400px] p-12 rounded-2xl`}
    >
      <div className="w-full h-full bg-cor-blk rounded-md grid grid-cols-3 grid-rows-2 gap-[1px] p-[1px]">
        {selectedCase.fillings.map((filling, index) => {
          console.log(filling.color);
          return <Filling key={index} color={filling.color} />;
        })}
      </div>
    </div>
  );
};

export default Paleta6;
