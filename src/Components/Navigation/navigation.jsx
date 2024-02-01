import React from "react";
import "../Navigation/navigation.css";
import Data from "../Data/data.json"
import { Link } from "react-router-dom";
function Nav(){
//STATE

//COMPORTEMENT

//RENDER
return(
    <div>
        <Link to={"/"} id="link-without-bar_accueil">
        <p><strong>Accueil</strong></p>
        </Link>
        <Link to={"/information"} id="link-without-bar_a_propos">
        <p id="p-a_propos"><strong>A Propos</strong></p>
        </Link>
    </div>
)
}
export default Nav