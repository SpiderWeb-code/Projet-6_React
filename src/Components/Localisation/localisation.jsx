import React from "react";
import "../Localisation/localisation.css";

function Localisation(props) {
  // Mapping des boutons en fonction de chaque élément dans le tableau props.tags
  // Utilise la méthode map pour créer un tableau de boutons à partir du tableau props.tags.
  // Chaque bouton est créé avec une classe button-X où X est l'index du bouton dans le tableau, et le texte du bouton est pris à partir de l'élément correspondant dans props.tags.
  // Si l'élément tag est falsy (par exemple, vide ou null), le bouton est rendu à null.
  const buttons = props.tags.map((tag, index) => (
    tag ? <button key={index} className={`button-${index + 1}`}>{tag}</button> : null
  ));

  // Mapping des éléments <li> avec les classes button-X et hidden si le bouton correspondant est manquant
  // Utilise Array.from pour créer un tableau de 4 éléments <li> (correspondant à vos 4 boutons).
  // Chaque élément <li> a une classe button-X où X est l'index de l'élément dans le tableau.
  // Utilise également une classe hidden si le bouton correspondant dans props.tags est manquant (falsy).
  const lis = Array.from({ length: 4 }, (_, index) => (
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