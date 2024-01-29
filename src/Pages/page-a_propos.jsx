import React from "react";
import Logo from "../Components/Logo/logo";
import Nav from "../Components/Navigation/navigation";
import Banner from "../Components/Banner/banner";
import SectionImage from "../Components/SectionImage/section-image";
import SectionImagePropos from "../Components/Data/image-section-page-info.webp";
import OpenLabel from "../Components/Open label/open-label";
import Data from "../Components/Data/data.json"
function ProposPage(){
    const filteredData = Data.filter(props => props.titleInfo);
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
      {filteredData.map(({id, titleInfo, info}) => (
        <React.Fragment key={id}>
        <OpenLabel label={titleInfo} description={info}/>
        </React.Fragment>
        ))}
      </section>
      <Banner />
    </main>
    )
}
export default ProposPage