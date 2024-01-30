import React from "react";
import "../Switch/switch.css"
import ArrowLeft from "../Data/angle-left-solid.svg";
import ArrowRight from "../Data/angle-right-solid.svg";

function Switch({ onClickLeft, onClickRight }){
    return(
    <div id="switch-buttons">
        <div className="div-button" onClick={onClickLeft}><img src={ArrowLeft} alt="arrow left"></img></div>
        <div className="div-button" onClick={onClickRight}><img src={ArrowRight} alt="arrow right"></img></div>
    </div>
    )
};
export default Switch