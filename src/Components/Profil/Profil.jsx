import React from "react";

function Profil(props){
    return(
        <div id="second-container">
            <p id="name">{props.name}</p>
            <img src={props.picture} alt="photo_de_profil"></img>
            </div>
    )
}
export default Profil