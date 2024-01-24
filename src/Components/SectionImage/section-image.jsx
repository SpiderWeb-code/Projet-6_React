import React from "react";
import ImageSection from "../Data/image-section.webp";
import "../SectionImage/section-image.css";
function SectionImage(){
//STATE
const altImageSection = "Image de rocher en bord de mer"
//COMPORTEMENT

//RENDER
return(
    <div id={"container-section-image"}>
        <h1 style={{display:"flex", position:"absolute", fontSize:"50px", color:"white", fontWeight:"300", fontFamily:"arial"}}>Chez vous, partout et ailleurs</h1>
        <img src={ImageSection} alt={altImageSection}></img>
    </div>
)
}
export default SectionImage