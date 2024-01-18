import "./App.css";
import Admin from "./Admin";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
