import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./custom.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlexPage from "./flexPage";
import GridPage from "./gridPage";
import HomePage from "./home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flexpage" element={<FlexPage />} />
        <Route path="/gridpage" element={<GridPage />} />
      </Routes>
    </Router>
  );
}

export default App;
