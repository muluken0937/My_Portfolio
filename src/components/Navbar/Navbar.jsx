import React, { useState } from "react";
import { Link } from "react-scroll"; 
import "./Navbar.css";
import logo from "../../assets/logo.png";
import dash from "../../assets/shape1.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link to="home" smooth={true} duration={500} className="anchor-Link" onClick={closeMenu}>
            <p>Home</p>
          </Link>
          {menuOpen === "home" ? (
            <img src={dash} style={{ width: "50px", height: "15px" }} />
          ) : null}
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className="anchor-Link" onClick={closeMenu}>
            <p>About Me</p>
          </Link>
          {menuOpen === "about" ? (
            <img src={dash} style={{ width: "50px", height: "15px" }} />
          ) : null}
        </li>
        <li>
          <Link to="services" smooth={true} duration={500} className="anchor-Link" onClick={closeMenu}>
            <p>Services</p>
          </Link>
          {menuOpen === "services" ? (
            <img src={dash} style={{ width: "50px", height: "15px" }} />
          ) : null}
        </li>
        <li>
          <Link to="work" smooth={true} duration={500} className="anchor-Link" onClick={closeMenu}>
            <p>Portfolio</p>
          </Link>
          {menuOpen === "work" ? (
            <img src={dash} style={{ width: "50px", height: "15px" }} />
          ) : null}
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="anchor-Link" onClick={closeMenu}>
            <p>Contact</p>
          </Link>
          {menuOpen === "contact" ? (
            <img src={dash} style={{ width: "50px", height: "15px" }} />
          ) : null}
        </li>
      </ul>
      <div className="nav-connect"> 
        <Link className="anchor-link" to="contact" smooth={true} duration={500} onClick={closeMenu}>
          Connect With Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;