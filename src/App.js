import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import ArticlePage from "./Pages/ArticlePage";
import ProposPage from "./Pages/ProposPage";
import NotFound from "./Pages/NotFound";

function App() {
  //Si l'élément n'est pas reconnu "*", alors renvoie le lien "/not-found".
  //Si le lien est "/not-found", alors ouvre la page <NotFound />.
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/information" element={<ProposPage />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;