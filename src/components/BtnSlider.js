import React from "react"
import leftArrow from "./components/img/left-arrow.svg"
import RightArrow from "./components/img/right-arrow.svg"



export default function BtnSlider() {
    return (
        <button className="btn--slide">
            <img src = {leftArrow} />
            <img src = {RightArrow} />

        </button>
    )
}