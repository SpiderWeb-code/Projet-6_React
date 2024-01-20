import React from "react";
import "../Logo/logo.css";
import logo from "../Data/logo.webp";
function Logo(){
//STATE
const logoAlt = "logo de la page Kasa"
//COMPORTEMENT

//RENDER
return(
    <div>
        <img id="logo" src={logo} alt={logoAlt}></img>
    </div>
)
}
export default Logo