import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Routes>
            <Route path="/" element={<h1>This is th homepage </h1>} />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
