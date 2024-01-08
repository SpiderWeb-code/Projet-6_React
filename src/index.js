import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header/Header';
import Section from './Components/Section/Section';
import Footer from './Components/Footer/Footer';
import Data from './Data/data.json';
import Article from './Components/Articles/Articles';

function App() {
  // STATE
  const [pageAccueil, setPageAccueil] = useState(null);
  // COMPORTEMENT
  useEffect(() => {
    // Rendre le contenu ici
    const content = (
      <React.StrictMode>
        <Header />
        <Section />
        <section>
          <div className='container-article'>
            {Data.map(({ title, id }) => (
              <Article key={id} title={title} />
            ))}
          </div>
        </section>
        <Footer />
      </React.StrictMode>
    );

    // Mettre à jour l'état avec le contenu rendu
    setPageAccueil(content);
  }, []); // Le tableau vide [] signifie que useEffect s'exécutera une seule fois après le montage initial

  // RENDER
  return <div>{pageAccueil}</div>;
}

export default App;

// Render de l'application dans la racine (index.js ou autre)
const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);