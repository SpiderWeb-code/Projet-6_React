import React from "react";
import "../Open label/open-label.css";
import Arrow from "../Data/chevron-up-solid.svg";
export const titleLabelDescription = <h3>Description</h3>;
export const titleLabelEquipements = <h3>Description</h3>;

function OpenLabel(props){
    const { label } = props;
    const { description } = props;
    const { equipements } = props;
    console.log(equipements)
    return(
        <div id="container-description">
            <div className="ouverture-label">
                {label}
                <img src={Arrow} alt="fléche ouverture et fermeture de la div"></img>
            </div>
            <div className="text-label">
            {description}
            {equipements}
            </div>
        </div>
    )  
}
export default OpenLabel