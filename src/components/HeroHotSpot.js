import React from "react";
import wallpaper from "./img/hotspot.jpg"; // Use a relative path with forward slashes
import "./HeroStyles.css"

function Hero1(props) {
  return (<>
    <div className= {props.cName}>
      <img src={wallpaper} alt="Wallpaper" />
      <div className="hero-txt1"> 
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
    </>);
}

export default Hero1;