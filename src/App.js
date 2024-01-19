import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../src/Pages/page-accueil';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;