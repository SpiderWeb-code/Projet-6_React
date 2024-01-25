import React from "react";
import "../Rating/rating.css";
import Data from "../Data/data.json";
import StarOn from "../Data/star-solid.svg";
import StarOff from "../Data/star-regular.svg";

function Rating(props) {
  let number = props.rating;
  console.log(number);

  return (
    <div id="container-rating">
      {/* Crée une boucle qui va répéter un certain nombre d'éléments */}
      {/* Math.min(index + 1, 5), assurant qu'on n'a pas plus de 5 éléments. (1 a 5 étoiles MAX) */}
      {/* Pour chaque répétition de la boucle, on crée une balise <img>. La clé (key) est importante pour aider React à suivre chaque image lors des mises à jour. */}
      {/* La source (image) de l'élément est déterminée en fonction de la relation entre i (l'index actuel dans la boucle) et index (la valeur de l'index passée au composant). */}
      {/* L'attribut 'alt' fournit un texte descriptif pour l'image. Si i est inférieur à index, cela signifie que c'est une "étoile allumée" ("star on"), sinon c'est une "étoile éteinte" ("star off"). Cela aide les lecteurs d'écran et offre une description pour les utilisateurs.*/}
      {Array.from({ length: Math.min(number + 1, 5) }).map((_, i) => (
        <img
          key={i}
          src={i < number ? StarOn : StarOff}
          alt={i < number ? "star on" : "star off"}
          className={i < number ? "starOn" : "starOff"}
        />
      ))}
    </div>
  );
}

export default Rating;