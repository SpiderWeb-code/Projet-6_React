import React from "react";
import "../Localisation/localisation.css"

function Localisation(props){
    return(
        <div id="first-container">
            <h2>{props.title}</h2>
            <p id="location">{props.location}</p>
            <div id="container-tags">
            <ul>
            <li></li>
            <li></li>
            <li></li>
            </ul>
            <div id="button-location">
            <button>{props.tags[0]}</button>
            <button>{props.tags[1]}</button>
            <button>{props.tags[2]}</button>
            </div>
            </div>
            </div>
    )
}
export default Localisation