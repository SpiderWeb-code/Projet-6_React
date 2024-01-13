import React, { useEffect } from 'react';
import "../ArticlePage/Page.css";
import image from "../../Data/image-section-page-accueil.webp"
import Data from '../../Data/data.json';
function PageArticle(){
    //STATE
    //useEfect = permet de modifier le DOM
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
            sectionText.style.color="red";
            sectionText.style.display="flex";
            sectionText.style.justifyContent="center";
            // Création des elements"
            const container = document.createElement("div")
            container.style.display="flex";
            container.style.flexDirection="column";
            container.style.justifyContent="start";
            container.style.maxWidth="1240px";
            container.style.width="100%";
            container.style.height="300px";
            const appartementElement = document.createElement("div");
            appartementElement.innerHTML = `<p id="titre">${title[0]}</p>`;
            appartementElement.style.fontSize="40px";
            const whereElement = document.createElement("div");
            whereElement.innerHTML = `<p id="localisation">${location[0]}</p>`;
            whereElement.style.fontSize="20px"
            const containerButton = document.createElement("div");
            containerButton.style.display="flex";
            containerButton.style.gap="10px";
            const buttonCozy = document.createElement("button");
            const buttonCanal= document.createElement("button");
            const buttonParis = document.createElement("button");
            buttonCozy.innerHTML ="Cozy";
            buttonCanal.innerHTML="Canal";
            buttonParis.innerHTML="Paris 10";
            //AJOUT D'UNE CLASS CSS AUX 3 BOUTONS
            buttonCozy.setAttribute("class", "three-buttons");
            buttonCanal.setAttribute("class", "three-buttons");
            buttonParis.setAttribute("class", "three-buttons");
            // RELIAGE
            sectionText.appendChild(container);
            container.appendChild(appartementElement);
            container.appendChild(whereElement);
            container.appendChild(containerButton);
            containerButton.appendChild(buttonCozy);
            containerButton.appendChild(buttonCanal);
            containerButton.appendChild(buttonParis);
        }
    },[]); 
}
        
export default PageArticle
