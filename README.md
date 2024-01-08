import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header/Header';
import Section from './Components/Section/Section';
import Footer from './Components/Footer/Footer';
import Data from './Data/data.json';
import Article from './Components/Articles/Articles';

function App(){
//STATE
const root = ReactDOM.createRoot(document.getElementById('root'))
const [pageAccueil, setPageAccueil] = useState(
  root.render(
  <React.StrictMode>
    <Header/>
    <Section />
    <section>
    <div className='container-article'>
      {Data.map(({title, id}) => (
        <Article key={id} title={title} />
      ))}
    </div>
    </section>
    <Footer />
  </React.StrictMode>
));
//COMPORTEMENT

//RENDER
root.render(
  {pageAccueil}
)
}
export default App