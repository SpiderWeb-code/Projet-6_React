import React from "react";
import "../Switch/switch.scss"
import ArrowLeft from "../Data/angle-left-solid.svg";
import ArrowRight from "../Data/angle-right-solid.svg";

function Switch({ onClickLeft, onClickRight, coverIndex, maxCoverIndex }){
    return(
        <div id="container-switch-buttons">
            {maxCoverIndex > 1 &&
            <>
        <div id="switch-buttons">
            <div className="div-button" onClick={onClickLeft}><img src={ArrowLeft} alt="arrow left"></img></div>
            <div className="div-button" onClick={onClickRight}><img src={ArrowRight} alt="arrow right"></img></div>

        </div>
        <div id="container-ul-switch">
            <ul>
                <li>{coverIndex + 1}</li>
                <li>/</li>
                <li>{maxCoverIndex + 1}</li>
            </ul>
            </div>
            </>
}
        </div>
    )
};
export default Switch