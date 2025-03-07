import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt='mulex' style={{ width: '100px', height: 'auto' }} />
      <div className='nav-hamburger' onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between icons */}
      </div>
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;