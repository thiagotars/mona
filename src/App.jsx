// App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CaseContextProvider } from "./CaseContext";
import Introduction from "./section/Introduction";
import BuildYourPalette from "./section/BuildYourPalette"; // Main component for step-based logic

function App() {
  return (
    <Router>
      <CaseContextProvider>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/build-your-palette" element={<BuildYourPalette />} />
        </Routes>
      </CaseContextProvider>
    </Router>
  );
}

export default App;
