import React, { useState } from "react";
import "./Contact.css";
import theme from "../../assets/shape1.png";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const formData = new FormData(event.target);
    formData.append("access_key", "24ba7d72-7432-4cc0-828e-cc7f629cefe1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setSuccessMessage("✅ Sent Successfully!");
        setErrorMessage("");
        toast.success(res.message, {
          position: "top-right",
          autoClose: 3000,
        });

        event.target.reset();

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        setErrorMessage("❌ Failed to send message. Please try again.");
        toast.error("Failed to send message. Try again.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      setErrorMessage("❌ Something went wrong. Please try again.");
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="theme" />
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
              <Mail size={20} />
              <span className="border px-2 py-1 rounded">
                mulukenjenber@gmail.com
              </span>
            </div>
            <div className="contact-detail">
              <Phone size={20} />
              +251 937 908 221
            </div>
            <div className="contact-detail">
              <MapPin size={20} />
              Addis Ababa, Ayer Tena
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required />
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" required />
          <label>Write Your Message Here</label>
          <textarea rows="8" placeholder="Enter your message" name="message" required />
          <div className="submit-container">
            <button type="submit" className={`contact-submit ${loading ? "loading" : ""}`} disabled={loading}>
              {loading ? "Sending..." : "Submit Now"}
            </button>
            {successMessage && <span className="success-message">{successMessage}</span>}
            {errorMessage && <span className="error-message">{errorMessage}</span>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
