import React from "react";
import FooterImage from "../Data/logo-footer.webp";
import "./footer.css";
function Footer(){
    return(
    <div id="banner">
        <picture>
            <source srcSet={FooterImage} media="(max-width: 425px)" alt="bas de page avec dessus le logo du site de Kasa"></source>
            <img src={FooterImage} alt="bas de page avec dessus le logo du site de Kasa"></img>
        </picture>
        <strong>© 2020 Kasa. All rights reserved</strong>
    </div>
    )
}
export default Footer