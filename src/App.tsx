import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Dashboard } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        {/* <Route path="/quiz/:quizId" element={<Quiz />}></Route>
        <Route path="/quiz/:quizId/scoreboard" element={<Scoreboard />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
