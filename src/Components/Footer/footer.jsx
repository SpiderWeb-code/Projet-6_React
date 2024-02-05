import React from "react";
import FooterImage from "../Data/Footer.webp";
import FooterImageMobil from "../Data/Kasa-image-mobil-banner.webp"
import "./footer.css";
function Footer(){
    return(
    <div>
        <picture>
            <source srcSet={FooterImageMobil} media="(max-width: 425px)" alt="bas de page avec dessus le logo du site de Kasa"></source>
            <img src={FooterImage} alt="bas de page avec dessus le logo du site de Kasa" id="banner"></img>
        </picture>
    </div>
    )
}
export default Footer