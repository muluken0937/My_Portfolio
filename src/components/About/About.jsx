import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiDjango, SiMongodb, SiSqlite } from "react-icons/si";
import "./About.css";
import theme from "../../assets/shape1.png";
import profile_img from "../../assets/profile1.jpg";

const About = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".count");
    counters.forEach((counter) => {
      counter.innerText = "0";
      const target = +counter.getAttribute("data-target");
      const increment = target / 100;

      const updateCount = () => {
        const current = +counter.innerText;
        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target + "+";
        }
      };

      updateCount();
    });
  }, []);

  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>
          <span>About</span> Me
        </h1>
        <img src={theme} alt="" />
      </div>
      <div className="sect">
        <div className="about-section">
          <div className="about-left">
            <img src={profile_img} alt="Profile" />
          </div>

          <div className="about-right">
            <div className="about-para">
              <p>
                I am a passionate Mobile and Web Developer with experience in
                building modern applications. I’m always eager to learn and
                bring creative solutions to life.
              </p>
              <p>
                I previously worked at <strong>Scitech Valley</strong>, where I
                contributed to ERP and sales performance tracking systems.
                Currently, I’m part of <strong>EthixDev</strong>, focusing on
                both web and mobile development, using technologies like{" "}
                <strong>
                  React, React Native, Node.js, Python, and Django
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="about-skills">
          {[
            { name: "HTML & CSS", width: "100%", icon: <FaHtml5 /> },
            { name: "JavaScript", width: "100%", icon: <FaJs /> },
            { name: "Python", width: "100%", icon: <FaPython /> },
            { name: "React Js", width: "100%", icon: <FaReact /> },
            { name: "React Native", width: "100%", icon: <FaReact /> },
            { name: "Node Js", width: "100%", icon: <FaNodeJs /> },
            { name: "Django", width: "100%", icon: <SiDjango /> },
            { name: "Mongo Db", width: "100%", icon: <SiMongodb /> },
            { name: "SQLite", width: "100%", icon: <SiSqlite /> },
          ].map((skill, index) => (
            <div className="about-skill" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-details">
                <p>{skill.name}</p>
                <div className="skill-bar-container">
                  <div
                    className="skill-bar"
                    style={{ width: skill.width }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1 className="count" data-target="3">
            0
          </h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1 className="count" data-target="10">
            0
          </h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1 className="count" data-target="11">
            0
          </h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
