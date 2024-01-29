import React from "react";
import "../Navigation/navigation.css";
import Data from "../Data/data.json"
import { Link } from "react-router-dom";
function Nav(){
//STATE

//COMPORTEMENT

//RENDER
return(
    <div id="navigation">
        <Link to={"/"} className="link-without-bar">
        <p id="p-navigation"><strong className="nav-link">Accueil</strong></p>
        </Link>
        <p><strong className="nav-link">A Propos</strong></p>
    </div>
)
}
export default Nav