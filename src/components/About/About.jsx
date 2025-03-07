import React, { useEffect } from "react";
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
    <div className="about">
      <div className="about-title">
        <h1><span>About</span> Me</h1>
        <img src={theme} alt="" />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate Mobile and Web Developer with experience in
              building modern applications. I’m always eager to learn and bring
              creative solutions to life.
            </p>
            <p>
              I previously worked at <strong>Scitech Valley</strong>, where I
              contributed to ERP and sales performance tracking systems.
              Currently, I’m part of <strong>EthixDev</strong>, focusing on both
              web and mobile development, using technologies like{" "}
              <strong>React, React Native, Node.js, Python, and Django</strong>.
            </p>
          </div>

          <div className="about-skills">
            {[
              { name: "HTML & CSS", width: "90%" },
              { name: "JavaScript", width: "65%" },
              { name: "Python", width: "60%" },
              { name: "React Js", width: "90%" },
              { name: "React Native", width: "60%" },
              { name: "Node Js", width: "80%" },
              { name: "DJango", width: "50%" },
              { name: "Mongo Db", width: "80%" },
              { name: "SQLite", width: "55%" },
            ].map((skill, index) => (
              <div className="about-skill" key={index}>
                <p>{skill.name}</p>
                <hr className="skill-bar" style={{ "--final-width": skill.width }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1 className="count" data-target="3">0</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1 className="count" data-target="10">0</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1 className="count" data-target="11">0</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
