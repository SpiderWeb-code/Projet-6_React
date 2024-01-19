import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner/banner";
import Article from "../Components/Article/article";
import Logo from "../Components/Logo/logo";
import Nav from "../Components/Navigation/navigation";
import Data from "../Components/Data/data.json";

function Home() {
  return (
    <section>
      <div id="main">
        <Logo />
        <Nav />
        <Link to={"/helloworld"}>
          <section className='container-article'>
            {Data.map(({ title, id, cover }) => (
              <Article key={id} title={title} cover={cover} />
            ))}
          </section>
        </Link>
        <Banner />
      </div>
    </section>
  );
}

export default Home;