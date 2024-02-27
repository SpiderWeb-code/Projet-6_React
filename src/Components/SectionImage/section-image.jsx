import React from "react";
import "../SectionImage/section-image.scss";
function SectionImage({image}){
//STATE
const altImageSection = "Image de la section";
//COMPORTEMENT

//RENDER
return(
    <div id={"container-section-image"}>
        <h1>Chez vous, partout et ailleurs</h1>
        <img src={image} alt={altImageSection}></img>
    </div>
)
}
export default SectionImage