function FillingCounter({ data }) {
  const countMap = {};

  // Iterate through the array and count occurrences of each object
  data.forEach((obj) => {
    const key = `${obj.id}_${obj.name}_${obj.price}`;
    if (countMap[key]) {
      // If the object already exists in the count map, increase its count
      countMap[key].quantity++;
    } else {
      // If the object is encountered for the first time, initialize its count to 1
      countMap[key] = { ...obj, quantity: 1 };
    }
  });

  // Render the count for each unique object
  return (
    <div className="mt-4">
      {Object.values(countMap).map((obj, index) => (
        <div key={index} className="flex">
          <p>{`(Quantity: ${obj.quantity}) | Color: ${obj.name}`}</p>
        </div>
      ))}
    </div>
  );
}
export default FillingCounter;
