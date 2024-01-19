import React from 'react';
import ReactDOM from 'react-dom/client';
import Rooter from './rooter';
import './index.css';
import Data from '../src/Data/data.json'
import Logo from './Components/Page-Accueil/Header/logo';
import Nav from './Components/Page-Accueil/Header/navigation';
import SectionImage from './Components/Page-Accueil/Main/section-image';
import Footer from '../src/Components/Page-Accueil/Footer/footer';
import Article from './Components/Page-Accueil/Main/article';

//STATE

//COMPORTEMENT

//RENDER
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rooter />
    <header>
    <Logo />
    <Nav />
    </header>
    <SectionImage />
    <section className='container-article'>
      {Data.map(({title, id, cover}) => (
      //<Article key={id} title={title} cover={cover}/>
        <Article key={id} title={title} cover={cover}/>
      ))}
    </section>
    <Footer />
  </React.StrictMode>
);

// Data = le dossier JSON
// map() = prend tous les éléments du dossier
// key = fait la même chose qu'un id mais en react
// title / id = éléments que l'on a récupérer du JSON pour le mettre en paramétre
