import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import dash from "../../assets/shape1.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // Set "home" as default

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="mulex" style={{ width: "100px", height: "auto" }} />
      <div className="nav-hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="anchor-Link"
            onClick={() => {
              closeMenu();
              setActiveLink("home");
            }}
          >
            <p>Home</p>
          </Link>
          {activeLink === "home" && (
            <img src={dash} style={{ width: "50px", height: "15px" }} alt="dash" />
          )}
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="anchor-Link"
            onClick={() => {
              closeMenu();
              setActiveLink("about");
            }}
          >
            <p>About Me</p>
          </Link>
          {activeLink === "about" && (
            <img src={dash} style={{ width: "50px", height: "15px" }} alt="dash" />
          )}
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="anchor-Link"
            onClick={() => {
              closeMenu();
              setActiveLink("services");
            }}
          >
            <p>Services</p>
          </Link>
          {activeLink === "services" && (
            <img src={dash} style={{ width: "50px", height: "15px" }} alt="dash" />
          )}
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="anchor-Link"
            onClick={() => {
              closeMenu();
              setActiveLink("work");
            }}
          >
            <p>Portfolio</p>
          </Link>
          {activeLink === "work" && (
            <img src={dash} style={{ width: "50px", height: "15px" }} alt="dash" />
          )}
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="anchor-Link"
            onClick={() => {
              closeMenu();
              setActiveLink("contact");
            }}
          >
            <p>Contact</p>
          </Link>
          {activeLink === "contact" && (
            <img src={dash} style={{ width: "50px", height: "15px" }} alt="dash" />
          )}
        </li>
      </ul>
      <div className="nav-connect">
        <Link
          className="anchor-link"
          to="contact"
          smooth={true}
          duration={500}
          onClick={() => {
            closeMenu();
            setActiveLink("contact");
          }}
        >
          Connect With Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;