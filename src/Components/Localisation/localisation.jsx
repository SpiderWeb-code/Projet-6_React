import React from "react";
import "../Localisation/localisation.css";

function Localisation(props) {
  // buttons = aux tags dans notre Data. et crée le parametre index pour compter nos tags
  const buttons = props.tags.map((tag, index) => (
  // SI on a tag, alors crée un button avec comme className "button-index", Sinon, ne fait rien = null (équivalent a un display: none;)
    tag ? <button key={index} className={`button-${index + 1}`}>{tag}</button> : null
  ));

  // lis = Créer un tableau de 5 <li> maximum pour nos 5 <button> en fonction du nombre dans index
  const lis = Array.from({ length: 5 }, (_, index) => (
    // Ajoute comme clé son numéros d'index, ajoute la class "button-index" pour chaques <li>, Si props.tags n'a pas de index, Alors, il prend la class "hidden" qui le rend invisible
    <li key={index} className={`button-${index + 1} ${!props.tags[index] && "hidden"}`}></li>
  ));

  // Rendu du composant
  return (
    <div id="first-container">
      <h2>{props.title}</h2>
      <p id="location">{props.location}</p>
      <div id="container-tags">
        <ul>
          {lis}
        </ul>
        <div id="button-location">
          {buttons}
        </div>
      </div>
    </div>
  );
}

export default Localisation;