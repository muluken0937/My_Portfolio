import React from "react";
import "./Contact.css";
import theme from "../../assets/shape1.png";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            If you have any ideas, hiring opportunities, or feedback, feel free
            to share them with me through the form below. I'd love to hear from
            you!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <Mail size={20}  />
              <span className="border px-2 py-1 rounded">
                mulukenjenber@gmail.com
              </span>
            </div>
            <div className="contact-detail">
              <p>
                <Phone size={20}  />
                +251 937 908 221
              </p>
            </div>
            <div className="contact-detail">
              {" "}
              <p>
                <MapPin size={20}  />
                Addis Ababa, Ayer Tena
              </p>
            </div>
          </div>
        </div>
        <form  className="contact-right">
          <label htmlFor=""> Your Name</label>
          <input type="text"  placeholder="enter your name" name="name"/>
          <labe htmlFor=""> Your Email</labe>
          <input type="email"  placeholder="enter your email" name="email"/>
          <labe htmlFor=""> Write Your Message Here</labe>
          <textarea type="text" rows="8" placeholder="enter your message"></textarea>
          <button type="submit" className="contact-submit"> Submit now</button>


        </form>
      </div>
    </div>
  );
};

export default Contact;
