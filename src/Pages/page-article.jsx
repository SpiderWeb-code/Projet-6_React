import React from 'react';
import Logo from "../Components/Logo/logo";
import Nav from "../Components/Navigation/navigation";
import Banner from "../Components/Banner/banner";
import Article from "../Components/Article/article";

import { useParams } from "react-router-dom";
import Data from "../Components/Data/data.json";
import "../Components/Article/article.css";

function ArticlePage() {
  let params = useParams();
  let paramsId = params.id;
  
  // Filtrer les éléments dans le tableau Data
  const filteredData = Data.filter(props => props.id === paramsId);

 
  return (
    <main>
      <header id="header">
        <Logo />
        <Nav />
      </header>
      <div className='container-article-2'>
      {/* Afficher les articles filtrés */}
      {filteredData.map(({ id, title, cover, location, host }) => (
        <Article key={id} title={title} cover={cover} location={location} name={host.name} picture={host.picture} />
      ))}
      </div>
      <Banner />
    </main>
  );
}

export default ArticlePage;