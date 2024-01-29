import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../src/Pages/page-accueil';
import ArticlePage from "./Pages/page-article";
import ProposPage from "./Pages/page-a_propos";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/information" element={<ProposPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;