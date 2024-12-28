import React from "react";
import wallpaper from "./img/hotel.jpg"; // Use a relative path with forward slashes
import "./HeroStyles.css"

function Hero2(props) {
  return (<>
    <div className= {props.cName}>
      <img src={wallpaper} alt="Wallpaper" />
      <div className="hero-txt"> 
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
    </>);
}

export default Hero2;