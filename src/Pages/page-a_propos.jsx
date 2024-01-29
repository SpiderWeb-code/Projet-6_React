import React from "react";
import Logo from "../Components/Logo/logo";
import Nav from "../Components/Navigation/navigation";
import Banner from "../Components/Banner/banner";
import SectionImage from "../Components/SectionImage/section-image";
import SectionImagePropos from "../Components/Data/image-section-page-info.webp";
import OpenLabel from "../Components/Open label/open-label";
import { titleLabelFiabilite } from "../Components/Open label/open-label";
import { titleLabelRespect } from "../Components/Open label/open-label";
import { titleLabelService } from "../Components/Open label/open-label";
import { titleLabelSecurite } from "../Components/Open label/open-label";
import Data from "../Components/Data/data.json"
function ProposPage(props){
    return(
        <main id="main_page-article">
      <header id="header">
        <Logo />
        <Nav />
      </header>
      <section id="container-section-info">
        <SectionImage image={SectionImagePropos}/>
      </section>
      <section id="container-label-info">
        <>
        <OpenLabel label={titleLabelFiabilite} />
        <OpenLabel label={titleLabelRespect} />
        <OpenLabel label={titleLabelService} />
        <OpenLabel label={titleLabelSecurite} />
        </>
      </section>
      <Banner />
    </main>
    )
}
export default ProposPage