import React from "react";
import "../Navigation/navigation.css";
import { Link } from "react-router-dom";
import logo from "../Data/logo.webp";


function Nav(){
const logoAlt = "logo de la page Kasa"

//RENDER
return(
    <div id="container-header">
        <div id="container-picture-header">
        <img id="logo" src={logo} alt={logoAlt}></img>
        </div>
        <div id="container-link-header">
        <Link to={"/"} id="link-without-bar_accueil">
        <p><strong>Accueil</strong></p>
        </Link>
        <Link to={"/information"} id="link-without-bar_a_propos">
        <p id="p-a_propos"><strong>A Propos</strong></p>
        </Link>
        </div>
    </div>
)
}
export default Nav