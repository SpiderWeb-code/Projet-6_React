import React, { useEffect } from 'react';
import "../ArticlePage/Page.css";
import image from "../../Data/image-section-page-accueil.webp"
import Data from '../../Data/data.json';
function PageArticle(){
    //STATE
    useEffect(() =>{
        //Liens de la page "/HelloWorld"
        const way = window.location.pathname;
        //COMPORTEMENT
        //CONDITION QUI DIT QUE SI MON LIEN EST "HelloWorld", alors...
        if(way.includes("/HelloWorld")){
            //Suppression des composant de la page d'accueil
            const h1 = document.getElementById("title")
            const sectionPicture = document.getElementById("container-image");
            const sectionText = document.getElementById("container-container-article");
            const picture = document.getElementById("picture");
            //Récupérer les titres dans les data afin de facilité des mises à jours
            const title = Data.map(item => item.title);
            const location = Data.map(item => item.location)
            //SUPPRESSION DES CHOSES INUTILES
            if(sectionText.firstChild){
                sectionText.removeChild(sectionText.firstChild);
            }
            if(h1){
                h1.remove()
            }
            //MISE EN FORME DE LA PAGE
            sectionPicture.style.height="400px";
            picture.setAttribute("src", image);
            // VA ETRE UTILISER POUR RECUPERER LE NOM DANS LA SECTION
            sectionText.style.fontSize="30px"
            sectionText.style.color="red";
            sectionText.style.display="flex";
            sectionText.style.justifyContent="center";
            //TRAVAIL
            // Création des elements"
            const container = document.createElement("div")
            container.style.display="flex";
            container.style.flexDirection="column";
            container.style.justifyContent="start";
            container.style.maxWidth="1240px";
            container.style.width="100%";
            container.style.height="300px";
            const appartementElement = document.createElement("div");
            appartementElement.innerHTML = `<p>${title[0]}</p>`;
            const whereElement = document.createElement("div");
            whereElement.innerHTML = `<p>${location[0]}</p>`;

            // RELIAGE
            sectionText.appendChild(container);
            container.appendChild(appartementElement);
            container.appendChild(whereElement);
        }
    },[]); 
}
        
export default PageArticle
