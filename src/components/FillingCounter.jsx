function FillingCounter({ data }) {
  const sortedArray = data.fillings.slice().sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="flex mt-3">
      <div className="flex gap-4"></div>
      <div className="w-full px-6 flex justify-center sm:justify-start flex-wrap gap-4 max-h-[320px] overflow-scroll mt-3">
        {sortedArray.map((filling, index) => (
          // <div key={index} className="flex flex-col items-center">
          //   <div
          //     className="flex gap-2 items-center justify-between w-[80px] h-[120px] rounded-lg"
          //     style={{
          //       backgroundImage: `url(${filling.image})`,
          //       backgroundPosition: "center",
          //       backgroundSize: "cover",
          //     }}
          //   ></div>
          //   <p className="text-sm mt-1">{filling.name}</p>
          // </div>
          <div
            key={index}
            className="flex items-center w-full xs:w-44 border rounded-lg"
          >
            <div
              className="flex gap-2 items-center justify-between w-[64px] h-[64px] rounded-lg"
              style={{
                backgroundImage: `url(${filling.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="h-full pl-2 flex flex-col justify-center">
              <p className="text-sm">{filling.name}</p>
              <p className="text-sm mt-1 font-semibold">
                {filling.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 0, // Minimum number of fraction digits
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default FillingCounter;
