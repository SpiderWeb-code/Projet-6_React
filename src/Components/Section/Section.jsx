import React from "react";
import Image from "../../Data/image-section.webp"
import './Section.css';

function Section(){
//STATE

//COMPORTEMENT

//AFFICHAGE
return(
    <section>
    <div id="container-image">
        <img src={Image} alt="photographie d'une crique" id="picture"></img>
        <h1 id="title">Chez vous, partout et ailleurs</h1>
    </div>
    </section>
)
}
export default Section