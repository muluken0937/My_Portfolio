import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img
         src={profile}
        alt="muluken"
        
      />

      <h1><span>I'm Muluken Jenber</span>, Full Stack Developer | Mobile & Web  .</h1>

      <h2> <span>About</span> Me</h2>
      <p>
        I am a passionate Mobile and Web Developer with experience in building modern applications.
        I previously worked at <strong>Scitech Valley</strong>, where I contributed to ERP and sales performance
        tracking systems. Currently, I’m part of <strong>EthixDev</strong>, focusing on both web and mobile development,
        using technologies like <strong>React, React Native, Node.js, Python, and Django</strong>. I’m always eager to learn
        and bring creative solutions to life.
      </p>

      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
