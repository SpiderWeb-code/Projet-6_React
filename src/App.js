import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import ArticlePage from "./Pages/ArticlePage";
import ProposPage from "./Pages/ProposPage";
import NotFound from "./Pages/NotFound";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/information" element={<ProposPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;