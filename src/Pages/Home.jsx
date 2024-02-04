import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner/banner";
import Article from "../Components/Article/article";
import Nav from "../Components/Navigation/navigation";
import Data from "../Components/Data/data.json";
import SectionImage from "../Components/SectionImage/section-image";
import SectionImageAccueil from "../Components/Data/image-section.webp";
import "../index.css";
const filteredData = Data.filter(props => props.title);
function Home() {
  return (
    <main>
        <header id="navigation">
        <Nav />
        </header>
        <SectionImage image={SectionImageAccueil}/>
          <section className='container-article'>
          {filteredData.map(({id, title, cover}) => (
              <Link key={id} to={`/article/`+ id}>
              <Article key={id} title={title} cover={cover}/>
              </Link>
            ))}
          </section>
        <Banner />
    </main>
  );
}
export default Home;