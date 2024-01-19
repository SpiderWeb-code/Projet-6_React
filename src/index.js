import React from 'react';
import ReactDOM from 'react-dom/client';
import Rooter from './rooter';

//STATE

//COMPORTEMENT

//RENDER
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rooter />
  </React.StrictMode>
);

// Data = le dossier JSON
// map() = prend tous les éléments du dossier
// key = fait la même chose qu'un id mais en react
// title / id = éléments que l'on a récupérer du JSON pour le mettre en paramétre
