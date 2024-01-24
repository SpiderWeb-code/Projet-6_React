import React from "react";
import "../Localisation/localisation.css"

function Localisation(props){
    return(
        <div id="first-container">
            <h2>{props.title}</h2>
            <p id="location">{props.location}</p>
            <button>{props.tags[0]}</button>
            <button>{props.tags[1]}</button>
            <button>{props.tags[2]}</button>
            </div>
    )
}
export default Localisation