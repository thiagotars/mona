import { useState } from "react";
import { urlFor } from "../utils/urlFor"; // Adjust the import path accordingly

const Filling = ({ filling, removeItem }) => {
  const [isHovered, setIsHovered] = useState(false);

  const imageUrl = urlFor(filling.image);

  return (
    <div
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="z-30 rounded-md relative"
    >
      {isHovered && (
        <div className="flex flex-col h-full gap-3 justify-center items-center">
          <div className="flex  bg-black px-2 py-1 rounded-lg">
            <p className="text-sm text-white">{filling.name}</p>
          </div>
          <button
            onClick={() => removeItem(filling)}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white"
          >
            <span className="material-symbols-rounded">close</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Filling;
