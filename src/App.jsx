import { useState } from "react";
import "./App.css";
import Fillings from "./section/Fillings";
import CaseSize from "./section/CaseSize";
import CaseColor from "./section/CaseColor";
import Footer from "./components/Footer";
import Review from "./section/Review";
import Introduction from "./section/Introduction";

function App() {
  const steps = ["intro", "size", "color", "fillings", "review"];
  const stepTitles = {
    size: [1, "Choose a case size"],
    color: [2, "Choose a case color"],
    fillings: [3, "Choose your fillings"],
    review: [4, "Review"],
  };

  const [stage, setStage] = useState(steps[0]);
  const [selectedCase, setSelectedCase] = useState({
    size: null,
    color: { name: "", image: null },
    price: null,
    fillings: [],
    extension: { name: "", image: null, price: null },
    images: [],
  });

  const stepTitle = stepTitles[stage] || [0, ""];

  return (
    <main className="relative flex flex-col h-screen">
      {stage === "intro" ? (
        <Introduction setStage={setStage} />
      ) : (
        <>
          <div className="flex items-end mt-16 w-full font-bold xl:px-24 md:px-12 px-6">
            <h2 className="text-lg">{"0" + stepTitle[0] + "."}</h2>
            <h2 className="ml-4 text-2xl">{stepTitle[1]}</h2>
          </div>
          <div className="w-full">
            {stage === "size" && (
              <CaseSize
                selectedCase={selectedCase}
                setSelectedCase={setSelectedCase}
              />
            )}
            {stage === "color" && (
              <CaseColor
                selectedCase={selectedCase}
                setSelectedCase={setSelectedCase}
              />
            )}
            {stage === "fillings" && (
              <Fillings
                selectedCase={selectedCase}
                setSelectedCase={setSelectedCase}
              />
            )}
            {stage === "review" && <Review selectedCase={selectedCase} />}
          </div>
          <Footer
            setStage={setStage}
            selectedCase={selectedCase}
            steps={steps}
            stage={stage}
          />
        </>
      )}
    </main>
  );
}

export default App;
