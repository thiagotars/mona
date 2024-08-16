import React from "react";
import paleta201 from "../assets/paleta201.png";

const Introduction = ({ setStage }) => {
  return (
    <section className="flex flex-col sm:flex-row h-screen w-full">
      <div className="w-full sm:w-1/2 h-full">
        <img
          src={paleta201}
          alt="Palette"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-center sm:pl-20 w-full sm:w-1/2 h-full pb-20 sm:pb-0">
        <div className="px-6 sm:pr-12 sm:pl-0 mt-12 sm:mt-0">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Build Your Palette
          </h1>
          <div>
            <p className="max-w-96 mt-2 sm:text-[1.125em]">
              Create a palette that's uniquely yours.
            </p>
            <p className="max-w-[22rem] mt-6 text-gray-500 sm:text-lg text-sm">
              Choose the perfect palette size, select your favorite color, and
              fill it with the shades that define your style.
            </p>
          </div>
        </div>
        <button
          onClick={() => setStage("size")}
          className="mt-10 py-3 px-8 w-[200px] bg-gray-100 rounded-full hover:text-white hover:bg-black transition duration-300"
        >
          Start Building
        </button>
      </div>
    </section>
  );
};

export default Introduction;
