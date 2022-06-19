import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Routine from "./components/Routine";
import Profile from "./components/Profile";
import Login from "./components/Login 2";
import Edit from "./components/Edit"
import Delete from "./components/Delete";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/routines" element={<Routine />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
