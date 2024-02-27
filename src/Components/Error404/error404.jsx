import React from "react";
import { Link } from "react-router-dom";
import "../Error404/error404.scss";
function Error404(){
    return(
        <div id="container-404">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/" id="link-error_404-accueil">Retourner sur la page d'accueil</Link>
        </div>
    )
}
export default Error404