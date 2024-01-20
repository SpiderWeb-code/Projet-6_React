import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner/banner";
import Article from "../Components/Article/article";
import Logo from "../Components/Logo/logo";
import Nav from "../Components/Navigation/navigation";
import Data from "../Components/Data/data.json";
import SectionImage from "../Components/SectionImage/section-image";
import "../index.css";

function Home() {
  return (
    <section>
      <div id="main">
        <header>
        <Logo />
        <Nav />
        </header>
        <SectionImage />
          <section className='container-article'>
            {Data.map(({ title, id, cover }) => (
              <Link to={"/helloworld"}>
              <Article key={id} title={title} cover={cover}/>
              </Link>
            ))}
          </section>
        <Banner />
      </div>
    </section>
  );
}

export default Home;