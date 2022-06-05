import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Routines from "./components/Routines";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  />
          <Route path="/routines" element={<Routines />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
