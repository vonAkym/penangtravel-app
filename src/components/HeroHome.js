import React from "react";
import wallpaper from "./img/penang2.jpg"; // Use a relative path with forward slashes
import "./HeroStyles.css"

function Hero(props) {
  return (<>
    <div className= {props.cName}>
      <img src={wallpaper} alt="Wallpaper" />
      <div className="hero-txt"> 
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
        {props.buttonText}
        </a>
      </div>
    </div>
    </>);
}

export default Hero;

