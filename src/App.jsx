import { useState } from "react";
import "./App.css";
import CaseSection from "./section/CaseSection";
import Paleta2 from "./components/Paleta2";
import Paleta6 from "./components/Paleta6";
import Paleta12 from "./components/Paleta12";
import FillingSection from "./section/FillingSection";
import PreviewSection from "./section/PreviewSection";

function App() {
  const [stage, setStage] = useState("case"); // Initial stage

  const [totalPrice, setTotalPrice] = useState(0);

  const [selectedCase, setSelectedCase] = useState({
    slots: null,
    color: null,
    price: totalPrice,
    fillings: [],
  });

  return (
    <main className="flex gap-16 px-24 py-12">
      <div className="w-1/2 flex justify-center mt-12">
        {selectedCase.slots === 2 && selectedCase.color && (
          <Paleta2 selectedCase={selectedCase} />
        )}

        {selectedCase.slots === 6 && selectedCase.color && (
          <Paleta6 selectedCase={selectedCase} />
        )}

        {selectedCase.slots === 12 && selectedCase.color && (
          <Paleta12 selectedCase={selectedCase} />
        )}
      </div>

      <div className="w-1/2">
        {stage === "review" && (
          <PreviewSection setStage={setStage} selectedCase={selectedCase} />
        )}

        {stage === "case" && (
          <CaseSection
            setTotalPrice={setTotalPrice}
            setStage={setStage}
            selectedCase={selectedCase}
            setSelectedCase={setSelectedCase}
          />
        )}

        {stage === "fillings" && (
          <FillingSection
            setTotalPrice={setTotalPrice}
            setStage={setStage}
            selectedCase={selectedCase}
            setSelectedCase={setSelectedCase}
          />
        )}
      </div>
    </main>
  );
}

export default App;
