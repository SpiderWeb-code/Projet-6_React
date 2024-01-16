import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Logo from './Components/Page-Accueil/Header/logo';
import Nav from './Components/Page-Accueil/Header/navigation';
import SectionImage from './Components/Page-Accueil/Main/section-image';


//STATE

//COMPORTEMENT

//RENDER
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
    <Logo />
    <Nav />
    </header>
    <SectionImage />
  </React.StrictMode>
);

// Data = le dossier JSON
// map() = prend tous les éléments du dossier
// key = fait la même chose qu'un id mais en react
// title / id = éléments que l'on a récupérer du JSON pour le mettre en paramétre
