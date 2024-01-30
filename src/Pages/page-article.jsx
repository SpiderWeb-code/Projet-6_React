import React, { useState } from 'react';
import Logo from '../Components/Logo/logo';
import Nav from '../Components/Navigation/navigation';
import Banner from '../Components/Banner/banner';
import Article from '../Components/Article/article';
import { useParams } from 'react-router-dom';
import Data from '../Components/Data/data.json';
import '../Components/Article/article.css';
import Profil from '../Components/Profil/Profil';
import Localisation from '../Components/Localisation/localisation';
import Rating from '../Components/Rating/rating';
import OpenLabel from '../Components/Open label/open-label';
import { titleLabelDescription, titleLabelEquipements } from '../Components/Open label/open-label';
import Switch from '../Components/Switch/switch';

function ArticlePage() {
  const { id: paramsId } = useParams();

  // Filtrer les éléments dans le tableau Data
  const [coverIndex, setCoverIndex] = useState(0);

  // Filtrer les éléments dans le tableau Data
  const filteredData = Data.filter((props) => props.id === paramsId);
  const pictures = filteredData[0]?.pictures || [];

  const handleSwitch = (increment) => {
    setCoverIndex((prevIndex) => (prevIndex + increment + pictures.length) % pictures.length);
  };

  return (
    <main id="main_page-article">
      <header id="header">
        <Logo />
        <Nav />
      </header>
      <div className="container-article-2">
        {/* Afficher les articles filtrés */}
        {filteredData.map(({ id, title, cover: articleCover, location, host, tags, rating, description, equipments }) => (
          <React.Fragment key={id}>
            <Switch onClickLeft={() => handleSwitch(-1)} onClickRight={() => handleSwitch(1)} />
            <Article cover={pictures[coverIndex] || articleCover || 'valeur_par_defaut_pour_cover'} />
            <section id="second-container">
              <Localisation title={title} location={location} tags={tags} />
              <div id="container-profil">
                <Profil name={host.name} picture={host.picture} />
                <Rating rating={rating} />
              </div>
            </section>
            <section id="container-labels">
              <OpenLabel label={titleLabelDescription} description={<p>{description}</p>} />
              <OpenLabel label={titleLabelEquipements} equipements={<ul>{equipments.map((item, index) => <li key={index}>{item}</li>)}</ul>} />
            </section>
          </React.Fragment>
        ))}
      </div>
      <Banner />
    </main>
  );
}

export default ArticlePage;