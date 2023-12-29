import React from "react";
import "./Header.css"
import Logo from "../../Data/logo.png"

function Header() {
  //STATE

  //COMPORTEMENT

  //AFFICHAGE
  return (
    <div id="container_header">
      <img src={Logo} alt="Logo"></img>
      <nav id="nav_header">
        <p id="p_accueil"><strong>Accueil</strong></p>
        <p><strong>A Propos</strong></p>
      </nav>
    </div>
  );
}

export default Header;
