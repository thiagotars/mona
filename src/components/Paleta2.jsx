import Filling from "./Filling";

const Paleta2 = ({ selectedCase }) => {
  return (
    <div
      style={{ backgroundColor: `${selectedCase.color}` }}
      className={`w-[248px] h-[296px] p-12 rounded-2xl`}
    >
      <div className="w-full h-full bg-cor-blk rounded-md grid grid-rows-2 gap-[1px] p-[1px]">
        {selectedCase.fillings.map((filling, index) => {
          return <Filling key={index} color={filling.color} />;
        })}
      </div>
    </div>
  );
};

export default Paleta2;
