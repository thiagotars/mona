const LoadingSkeleton = ({
  width,
  height,
  imageHeight = "100%",
  textHeight = null,
}) => {
  return (
    <div
      className="border rounded-lg animate-pulse"
      style={{
        width,
        height, // Add a border for visibility
        // boxSizing: "border-box", // Ensure padding is included in the width/height calculations
      }}
    >
      <div
        className="bg-gray-300 rounded-lg"
        style={{
          width: "100%",
          height: imageHeight,
        }}
      ></div>
      {textHeight && (
        <div className="py-4 px-6 ">
          <div
            className="bg-gray-300 rounded-lg"
            style={{
              height: textHeight, // Explicit height
              width: "100%", // Full width
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default LoadingSkeleton;
