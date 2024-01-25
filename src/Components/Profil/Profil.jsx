import React from "react";
import "../Profil/Profil.css"

function Profil(props){
    return(
        <div id="profil">
            <p><span>{props.name}</span></p>
            <img src={props.picture} alt="photo_de_profil"></img>
            </div>
    )
}
export default Profil