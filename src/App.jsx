import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Collections from "./components/Collections";

const App = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <Link to="/" className="navlink">Home</Link>
        <Link to="/collections" className="navlink">Collections</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
      <footer>
        <h3>A Decade of Weaving Timeless Traditions</h3>
        <p>
          Marking 10 years of excellence, Neidhal proudly offers exquisite sarees and unstitched salwar materials, blending tradition and quality with fresh collections introduced every single day.
        </p>
      </footer>
    </div>
  );
};

export default App;
