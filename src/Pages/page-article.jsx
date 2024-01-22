import React from 'react';
import Logo from "../Components/Logo/logo";
import Nav from "../Components/Navigation/navigation";
import Banner from "../Components/Banner/banner";
import Article from "../Components/Article/article";
import { useParams } from "react-router-dom";
import Data from "../Components/Data/data.json";

function ArticlePage() {
  let params = useParams();
  let paramsId = params.id;
  
  // Filtrer les éléments dans le tableau Data
  const filteredData = Data.filter(props => props.id === paramsId);
  console.log(paramsId)
  console.log(Data)

  return (
    <main>
      <header>
        <Logo />
        <Nav />
      </header>

      {/* Afficher les articles filtrés */}
      {filteredData.map(({ id, title, cover }) => (
        <Article key={id} title={title} cover={cover} />
      ))}
      <Banner />
    </main>
  );
}

export default ArticlePage;