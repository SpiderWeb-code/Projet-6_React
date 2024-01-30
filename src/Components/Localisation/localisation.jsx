import React from "react";
import "../Localisation/localisation.css";

function Localisation(props) {
  // buttons = aux tags dans notre Data. et crée le parametre index pour compter nos tags
  const buttons = props.tags.map((tag, index) => (
  // SI on a tag, alors crée un button avec comme className "button-index", Sinon, ne fait rien = null (équivalent a un display: none;)
    tag ? <button key={index} className={`button-${index + 1}`}>{tag}</button> : null
  ));

  

  // Rendu du composant
  return (
    <div id="first-container">
      <h2>{props.title}</h2>
      <p id="location">{props.location}</p>
      <div id="container-tags">
        <div id="button-location">
          {buttons}
        </div>
        </div>
      </div>
  );
}

export default Localisation;