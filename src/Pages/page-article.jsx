import React from 'react';
import Logo from "../Components/Logo/logo";
import Nav from "../Components/Navigation/navigation";
import Banner from "../Components/Banner/banner";
import Article from "../Components/Article/article";
import { useParams } from "react-router-dom";
import Data from "../Components/Data/data.json";
import "../Components/Article/article.css";
import Profil from '../Components/Profil/Profil';
import Localisation from '../Components/Localisation/localisation';
import Rating from '../Components/Rating/rating';
import OpenLabel from '../Components/Open label/open-label';
import { titleLabelDescription } from '../Components/Open label/open-label';
import { titleLabelEquipements } from '../Components/Open label/open-label';
import Switch from '../Components/Switch/switch';
import { useState } from 'react';

function ArticlePage() {
  let params = useParams();
  let paramsId = params.id;

  // Filtrer les éléments dans le tableau Data
  const [cover, setCover] = useState("");

  // Filtrer les éléments dans le tableau Data
  const filteredData = Data.filter((props) => props.id === paramsId);

  const handleSwitchLeft = () => {
    // Mettre à jour la valeur de cover en fonction de la logique souhaitée pour la flèche gauche
    //Récupére le premier lien en fonction de l'id de L'URL
    let index = 0
    index++
    setCover(
      filteredData.map(props => props.pictures[index])
      )
  };

  const handleSwitchRight = () => {
    // Mettre à jour la valeur de cover en fonction de la logique souhaitée pour la flèche droite
    let index = 5
    index--
    setCover(
      filteredData.map(props => props.pictures[index])
    );
  };


  return (
    <main id="main_page-article">
      <header id="header">
        <Logo />
        <Nav />
      </header>
      <div className="container-article-2">
        {/* Afficher les articles filtrés */}
        {filteredData.map(
          ({ id, title, cover: articleCover, location, host, tags, rating, description, equipments }) => (
            <React.Fragment key={id}>
              <Switch onClickLeft={handleSwitchLeft} onClickRight={handleSwitchRight} />
              {/* Utiliser la variable d'état cover ici */}
              <Article cover={cover || articleCover || "valeur_par_defaut_pour_cover"} />
              <section id="second-container">
                <Localisation title={title} location={location} tags={tags} />
                <div id="container-profil">
                  <Profil name={host.name} picture={host.picture} />
                  <Rating rating={rating} />
                </div>
              </section>
              <section id="container-labels">
                <OpenLabel label={titleLabelDescription} description={<p>{description}</p>} />
                <OpenLabel
                  label={titleLabelEquipements}
                  equipements={
                    <ul>
                      {equipments.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  }
                />
              </section>
            </React.Fragment>
          )
        )}
      </div>
      <Banner />
    </main>
  );
}

export default ArticlePage;