import React from "react";
import "./Slider.css";
import upArrow from "./icons/up-arrow.png";
import downArrow from "./icons/down-arrow.svg";


export default function BtnSliderUpDown({direction, moveUpDown}) {
    console.log(direction);
    return (
        <button onClick={moveUpDown} className={direction === "down" ? "btn-slide down" : "btn-slide up"}>
            <img src={direction === "down" ? downArrow : upArrow} alt={"image"}/>
        </button>
    );
}