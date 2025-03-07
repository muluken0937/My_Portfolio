import React from "react";
import "./About.css";
import theme from "../../assets/shape1.png";
import profile_img from "../../assets/profile1.jpg";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>
          {" "}
          <span>About</span> Me
        </h1>
        <img src={theme} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              {" "}
              I am a passionate Mobile and Web Developer with experience in
              building modern applications. I’m always eager to learn and bring
              creative solutions to life.
            </p>
            <p>
              I previously worked at <strong>Scitech Valley</strong>, where I
              contributed to ERP and sales performance tracking systems.
              Currently, I’m part of <strong>EthixDev</strong>, focusing on both
              web and mobi le development, using technologies like{" "}
              <strong>React, React Native, Node.js, Python, and Django</strong>.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>React Native</p>
              <hr style={{ width: "60%" }} />
            </div>

            <div className="about-skill">
              <p>Node Js</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>DJango</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Mongo Db</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>SQLite</p>
              <hr style={{ width: "55%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPRIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>11+</h1>
          <p>HAPPIES CLIENTS </p>
        </div>
      </div>
    </div>
  );
};

export default About;
