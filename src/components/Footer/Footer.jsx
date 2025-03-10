import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="Logo" />
          <p>
            I am a Full-Stack Mobile & Web Developer passionate about creating
            efficient solutions and eager <br />
            to learn new technologies for better application delivery.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <Mail />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Muluken Jenber. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
