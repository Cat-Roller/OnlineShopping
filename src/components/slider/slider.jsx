import React from "react";
import "./slider.scss"
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { useState } from "react";

const Slider =()=>{

    const [Slide,SetSlide]=useState(0)

    const data =[
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]

    const prevSlide=()=>{SetSlide(Slide===0?2:Slide-1)}
    const nextSlide=()=>{SetSlide(Slide===2?0:Slide+1)}
    return(
        <div className="slider">
            <div className="container" style={{transform:`translateX(-${Slide*100}vw)`}}>
                <img src={data[0]} alt="pic" />
                <img src={data[1]} alt="pic" />
                <img src={data[2]} alt="pic" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestIcon/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastIcon/>
                </div>
            </div>
        </div>
    )
}

export default Slider