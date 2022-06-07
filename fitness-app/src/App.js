import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Routine from "./components/Routines";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact />
          <Route path="/routines" element={<Routine />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
