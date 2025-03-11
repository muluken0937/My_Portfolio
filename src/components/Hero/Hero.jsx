import React, { useEffect, useState } from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpg";
import { Link } from "react-scroll"; 

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "I'm Muluken Jenber";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust speed here (100ms per letter)
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div id="home" className="hero">
      <div className="image-container">
        <img src={profile} alt="muluken" />
        <div className="curve-line curve-line-1"></div>
        <div className="curve-line curve-line-2"></div>
        <div className="spot spot-1"></div>
        <div className="spot spot-2"></div>
        
      </div>

      <h1>
        <span className="popup-text">{text}</span>, Full Stack Developer | Mobile & Web .
      </h1>
      
      <p>
      I am a Full-Stack Mobile & Web Developer passionate about creating efficient solutions and eager <br/>to learn 
      new technologies for better application delivery.
      </p>
      

      <div className="hero-action">
        <div className="hero-connect"> <Link className="anchor-link"  to="contact" smooth={true} duration={500}>Connect With Me </Link></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;