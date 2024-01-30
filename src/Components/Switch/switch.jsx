import React from "react";
import "../Switch/switch.css"
import ArrowLeft from "../Data/angle-left-solid.svg";
import ArrowRight from "../Data/angle-right-solid.svg";

function Switch(){
    return(
    <div id="switch-buttons">
        <div className="div-button"><img src={ArrowLeft} alt="arrow left"></img></div>
        <div className="div-button"><img src={ArrowRight} alt="arrow right"></img></div>
    </div>
    )
}
export default Switch