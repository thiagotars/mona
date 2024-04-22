const Filling = ({ color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`z-30 rounded-md bg-${color}`}
    ></div>
  );
};

export default Filling;
