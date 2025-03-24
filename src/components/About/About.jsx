import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiDjango, SiMongodb, SiSqlite } from "react-icons/si";
import { motion } from "framer-motion"; // Import Framer Motion
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

  // Framer Motion Variants for Skills
  const skillVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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

        {/* Skills Section with Framer Motion */}
        <motion.div
          className="about-skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2, // Stagger the animations
              },
            },
          }}
        >
          {[
            { name: "HTML", width: "100%", icon: <FaHtml5 /> },
            { name: "CSS", width: "100%", icon: <FaCss3Alt /> },
            { name: "Java Script", width: "100%", icon: <FaJs /> },
            { name: "Python", width: "100%", icon: <FaPython /> },
            { name: "React Js", width: "100%", icon: <FaReact /> },
            { name: "React Native", width: "100%", icon: <FaReact /> },
            { name: "Node Js", width: "100%", icon: <FaNodeJs /> },
            { name: "Django", width: "100%", icon: <SiDjango /> },
            { name: "MongoDB", width: "100%", icon: <SiMongodb /> },
            { name: "SQLite", width: "100%", icon: <SiSqlite /> },
          ].map((skill, index) => (
            <motion.div
              className="about-skill"
              key={index}
              variants={skillVariants} // Apply animation variants
            >
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
            </motion.div>
          ))}
        </motion.div>
      </div>
      <hr className="hr" />
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