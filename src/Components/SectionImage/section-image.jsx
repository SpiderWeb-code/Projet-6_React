import React from "react";
import ImageSection from "../Data/image-section.webp";
function SectionImage(){
//STATE
const altImageSection = "Image de rocher en bord de mer"
//COMPORTEMENT

//RENDER
return(
    <div style={{padding:"30px 100px 0px 100px", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <h1 style={{display:"flex", position:"absolute", fontSize:"50px", color:"white", fontWeight:"300", fontFamily:"arial"}}>Chez vous, partout et ailleurs</h1>
        <img src={ImageSection} alt={altImageSection} style={{height: "250px", objectFit: "cover", width: "100%", borderRadius:"25px"}}></img>
    </div>
)
}
export default SectionImage