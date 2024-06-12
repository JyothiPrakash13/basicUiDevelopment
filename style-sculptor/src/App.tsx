import "./App.scss";
import "./custom.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./home";
import FlexPage from "./flex-page";
import GridPage from "./grid-page";
import FlexResponsivePage from "./flex-responsive-page";
import CombinedResponsivePage from "./combined-responsive-page";
import GridResponsivePage from "./grid-responsive-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flexpage" element={<FlexPage />} />
        <Route path="/gridpage" element={<GridPage />} />
        <Route path="/flex-responsive-page" element={<FlexResponsivePage />} />
        <Route path="/grid-responsive-page" element={<GridResponsivePage />} />
        <Route
          path="/combined-responsive-page"
          element={<CombinedResponsivePage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
