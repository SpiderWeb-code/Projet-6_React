import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header/Header';
import Section from './Components/Section/Section'
import Data from './Data/data.json'
import Article from './Components/Articles/Articles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Section />
    <section>
    <div className='container-article'>
      {Data.map(({title, id}) => (
        <Article key={id} title={title}/>
      ))}
    </div>
    </section>
  </React.StrictMode>
);

// Data = le dossier JSON
// map() = prend tous les éléments du dossier
// key = fait la même chose qu'un id mais en react
// title / id = éléments que l'on a récupérer du JSON pour le mettre en paramétre
