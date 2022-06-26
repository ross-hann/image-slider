import React, {useState} from "react"
import sliderData from "./sliderData"
import leftArrow from "../img/left-arrow.svg"
import rightArrow from "../img/right-arrow.svg"


export default function Slider() {

    const [current, setCurrent] = useState(0)
    const length = sliderData.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const imageList = sliderData.map((slide, index) => {
        return  (
        <div>
            {index === current && (<img className = "images--list"  src={slide.src} />)}
        </div>
        )
    })

    return (
        <section className="slider--pane">
            <img className = "arrow--left" src = {leftArrow} onClick = {prevSlide}  />
            <img className = "arrow--right" src = {rightArrow} onClick = {nextSlide} />
            <div className = "slider--img" >
                {imageList}
            </div>
        </section>
    )
}
