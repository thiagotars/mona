const TotalPrice = ({ selectedCase }) => {
  // console.log(selectedCase);
  const calculateFillings = () => {
    const totalPrice = selectedCase.fillings.reduce(
      (accumulator, current) => accumulator + current.price,
      0
    );
    return totalPrice;
  };

  return (
    <div className="flex items-center mt-12">
      <h1 className="text-lg font-bold">Total price:</h1>
      <h1 className="ml-10 text-xl font-bold">
        {(selectedCase.price + calculateFillings()).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h1>
    </div>
  );
};

export default TotalPrice;
