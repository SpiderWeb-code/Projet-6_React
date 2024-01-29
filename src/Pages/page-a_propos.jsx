import React from "react";
import Logo from "../Components/Logo/logo";
import Nav from "../Components/Navigation/navigation";
import Banner from "../Components/Banner/banner";
import SectionImage from "../Components/SectionImage/section-image";

function ProposPage(){
    return(
        <main id="main_page-article">
      <header id="header">
        <Logo />
        <Nav />
      </header>
      <section>
        <SectionImage />
      </section>
      <Banner />
    </main>
    )
}
export default ProposPage