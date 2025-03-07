import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile} alt="muluken" />

      <h1>
        <span>I'm Muluken Jenber</span>, Full Stack Developer | Mobile & Web .
      </h1>
      
      <p>
        I'm a Full-Stack Mobile & Web Developer, passionate about building
        creative and efficient solutions. Always eager to learn new technologies
        and improve my skills to deliver better applications.
      </p>

      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
