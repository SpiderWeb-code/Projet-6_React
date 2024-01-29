import React, { useState } from "react";
import "../Open label/open-label.css";
import Arrow from "../Data/chevron-up-solid.svg";
export const titleLabelDescription = <h3>Description</h3>;
export const titleLabelEquipements = <h3>Équipements</h3>;
export const titleLabelFiabilite = <h3>Fiabilité</h3>;
export const titleLabelRespect = <h3>Respect</h3>;
export const titleLabelService = <h3>Service</h3>;
export const titleLabelSecurite = <h3>Sécurité</h3>;

function OpenLabel(props){
    // isActive = false (désactivé)
    const [isActive, setIsActive] = useState(false);
    const [isRotated, setIsRotated] = useState(false);
    const { label } = props;
    const { description } = props;
    const { equipements } = props;

    // isActive = true (activé)
    function Activation (){
        setIsActive(!isActive)
        setIsRotated(!isRotated)
    }

    return(
        <div id="container-description">
            <div className="ouverture-label">
                {label}
                <img src={Arrow} alt="fléche ouverture et fermeture de la div" onClick={Activation} className={isRotated ? 'rotated' : 'no-rotated'}></img>
            </div>
            {/* selon l'états de isActive (true ou false), alors cela changera la class de la div via son style css*/}
            <div className={isActive ? 'active' : 'not-active'}>
            {description}
            {equipements}
            </div>
        </div>
    )  
}
export default OpenLabel