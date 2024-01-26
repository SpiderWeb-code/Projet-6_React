import React from "react";
import "../Open label/open-label.css";
import Arrow from "../Data/chevron-up-solid.svg";
export const titleLabelDescription = "Description";
export const titleLabelEquipements = "Équipements";

function OpenLabel(props){
    const { label } = props;
    const { description } = props;
    const { equipements } = props;
    console.log(label)
    return(
        <div id="container-description">
            <div className="ouverture-label">
                <h3>{label}</h3>
                <img src={Arrow} alt="fléche ouverture et fermeture de la div"></img>
            </div>
            <div>
            <p>{description}</p>
            <p>{equipements}</p>
            </div>
        </div>
    )  
}
export default OpenLabel