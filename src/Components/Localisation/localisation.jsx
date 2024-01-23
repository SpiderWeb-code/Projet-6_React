import React from "react";

function Localisation(props){
    return(
        <div id="first-container">
            <h2>{props.title}</h2>
            <p id="location">{props.location}</p>
            </div>
    )
}
export default Localisation