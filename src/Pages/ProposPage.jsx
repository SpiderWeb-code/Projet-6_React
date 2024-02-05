import React from "react";
import Nav from "../Components/Navigation/navigation";
import Footer from "../Components/Footer/footer.jsx";
import SectionImage from "../Components/SectionImage/section-image";
import SectionImagePropos from "../Components/Data/image-section-page-info.webp";
import OpenLabel from "../Components/Open label/open-label";
import Data from "../Components/Data/data-label.json";
function ProposPage(){
    const filteredData = Data.filter(props => props.titleInfo);
    return(
        <main id="main_page-article">
      <header id="header">
        <Nav />
      </header>
      <section id="container-section-info">
        <SectionImage image={SectionImagePropos}/>
      </section>
      <section id="container-label-info">
      {filteredData.map(({id, titleInfo, info}) => (
        <React.Fragment key={id}>
        <OpenLabel label={<h3>{titleInfo}</h3>} description={<p>{info}</p>}/>
        </React.Fragment>
        ))}
      </section>
      <Footer />
    </main>
    )
}
export default ProposPage