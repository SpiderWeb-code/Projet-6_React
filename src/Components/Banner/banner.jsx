import React from "react";
import FooterImage from "../Data/Footer.webp";
import "../Banner/banner.css";
function Banner(){
    return(
    <div>
        <img id="banner" src={FooterImage} alt="bas de page avec dessus le logo du site de Kasa"></img>
    </div>
    )
}
export default Banner