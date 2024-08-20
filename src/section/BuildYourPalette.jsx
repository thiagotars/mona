import { useContext, useState, useEffect } from "react";
import CaseSize from "./CaseSize";
import CaseColor from "./CaseColor";
import Fillings from "./Fillings";
import Review from "./Review";
import Footer from "../components/Footer";
import { CaseContext } from "../CaseContext";
import client from "../../Backend_sanity/sanityClient";
import { urlFor } from "../utils/urlFor";

const BuildYourPalette = () => {
  const { currentStep, getStepTitle } = useContext(CaseContext);
  const [cases, setCases] = useState([]);
  const [extensions, setExtensions] = useState([]);
  const [fillings, setFillings] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "case"]{
          _id,
          size,
          price,
          images,
          unitsInStock,
          "colors": colors[]{
            color,
            image
          }
        }`
      )
      .then((data) => {
        // Sort cases by size before setting state
        const sortedCases = data.sort((a, b) => a.size - b.size);
        setCases(sortedCases);

        // Preload images and set imagesLoaded to true when all images are loaded
        const totalImages = sortedCases.reduce(
          (acc, caseItem) => acc + caseItem.images.length,
          0
        );
        let imagesLoadedCount = 0;

        sortedCases.forEach((caseItem) => {
          caseItem.images.forEach((image) => {
            const img = new Image();
            img.src = urlFor(image).toString();
            img.onload = () => {
              imagesLoadedCount += 1;
              if (imagesLoadedCount === totalImages) {
                setImagesLoaded(true);
              }
            };
          });
        });
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "extension"]{
          price,
          name,
          image,
          "colors": colors[]{
            color,
            image
          }
        }`
      )
      .then((data) => setExtensions(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "filling"]{
          image,
          price,
          "colors": colors[]{
            name,
            image,
            price
          }
        }`
      )
      .then((data) => setFillings(data))
      .catch((error) => console.error(error));
  }, []);

  const renderStepComponent = () => {
    switch (currentStep) {
      case 0:
        return (
          <CaseSize
            cases={cases}
            extensions={extensions}
            imagesLoaded={imagesLoaded}
          />
        );
      case 1:
        return <CaseColor cases={cases} extensions={extensions} />;
      case 2:
        return <Fillings fillings={fillings} />;
      case 3:
        return <Review />;
      default:
        return <CaseSize />;
    }
  };

  return (
    <div className="relative flex flex-col h-screen">
      <div className="flex items-end mt-16 w-full font-bold xl:px-24 md:px-12 px-6">
        <h2 className="text-lg">{currentStep + 1}.</h2>
        <h2 className="ml-4 text-2xl">{getStepTitle()}</h2>
      </div>
      <div className="w-full">{renderStepComponent()}</div>
      <Footer />
    </div>
  );
};

export default BuildYourPalette;
