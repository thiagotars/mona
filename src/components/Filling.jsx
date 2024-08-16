import { useState } from "react";

const Filling = ({ filling, removeItem }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `url(${filling.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="z-30 rounded-md relative"
    >
      {isHovered && (
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center bg-black px-1 py-1 rounded-lg mt-6">
            <p className="text-sm text-white">{filling.name}</p>
          </div>
          <button
            onClick={() => removeItem(filling)}
            className="absolute flex items-center justify-center m-auto left-0 right-0 bottom-0 mb-2 w-8 h-8 rounded-full bg-black text-white"
          >
            <span className="material-symbols-rounded">close</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Filling;
