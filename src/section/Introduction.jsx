import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../Backend_sanity/sanityClient";
import { urlFor } from "../utils/urlFor";

const Introduction = () => {
  const [introData, setIntroData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "intro"][0]{
          image,
          text
        }`
      )
      .then((data) => setIntroData(data))
      .catch((error) => console.error(error));
  }, []);

  if (!introData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex flex-col sm:flex-row h-screen w-full">
      <div className="w-full sm:w-1/2 h-full">
        <img
          src={urlFor(introData.image)}
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
            <p className="max-w-[22rem] mt-6 text-gray-500 sm:text-md text-sm">
              {introData.text}
            </p>
          </div>
        </div>
        <Link to="build-your-palette">
          <button className="mt-10 py-3 px-8 w-[200px] bg-gray-100 rounded-full hover:text-white hover:bg-black transition duration-300">
            Start Building
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Introduction;
