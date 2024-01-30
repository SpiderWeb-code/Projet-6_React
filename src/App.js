import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import ArticlePage from "./Pages/ArticlePage";
import ProposPage from "./Pages/ProposPage";

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