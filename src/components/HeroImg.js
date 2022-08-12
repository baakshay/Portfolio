import "./HeroImgStyles.css";

import React from 'react';

import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"
import Typewriter from "typewriter-effect";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="into-img" src={IntroImg} alt="IntroImg" />            
        </div>
        <div className="content">
          <p>HI, I'M Akshay.</p>
          <h1>React Developer.</h1>
          <div className="typeWriting">
          <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("React Developer")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("WordPress Developer")
       .start();
       }}
       
       
       />
       </div>
          {/* <h1>+</h1>
          <h1>WordPress Developer</h1> */}
          <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
          </div>
        </div>
      
    </div>
  )
}

export default HeroImg
