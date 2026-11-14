import React, { useState } from "react";
import { Link } from "react-router-dom";
import PathConstants from "../../routes/pathConstants";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaRegPaperPlane,
} from "react-icons/fa";
import { subscribeNewsletter } from "../../services/subscribers/subscribers.service";
import { FooterWrapper } from "./styles";

const QUICK_LINKS = [
  { label: "About Us", to: PathConstants.ABOUT },
  { label: "Services", to: PathConstants.SERVICES },
  { label: "Portfolio", to: PathConstants.PORTFOLIO },
  { label: "Blog", to: PathConstants.BLOG },
  { label: "Contact Us", to: PathConstants.CONTACT },
];

const SERVICE_LINKS = [
  { label: "Web Development", to: PathConstants.SERVICES },
  { label: "Machine Learning", to: PathConstants.SERVICES },
  { label: "Robotics", to: PathConstants.SERVICES },
  { label: "Industrial Consulting", to: PathConstants.SERVICES },
  { label: "Data Analytics", to: PathConstants.SERVICES },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", text: "" });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;

    setLoading(true);
    setFeedback({ type: "", text: "" });

    const response = await subscribeNewsletter({ email: trimmedEmail });
    setLoading(false);

    if (response.status === 200 || response.status === 201) {
      setEmail("");
      setFeedback({
        type: "success",
        text: "Subscribed successfully! Thank you.",
      });
    } else {
      setFeedback({
        type: "error",
        text:
          response.data?.message ||
          "Subscription failed. Please try again.",
      });
    }
  };

  return (
    <FooterWrapper>
      <div className="container">
        <div className="footer-top">
          <div className="footer-col">
            <h6 className="col-title">CONTACT DETAIL</h6>
            <ul className="footer-list">
              <li>
                123 Business Street, Suite 100,
                <br />
                New York, NY 10001
              </li>
              <li>Phone: +1 234 567 8900</li>
              <li>Email: info@dkust.com</li>
            </ul>
          </div>

          <div className="footer-col">
            <h6 className="col-title">QUICK LINKS</h6>
            <ul className="footer-list">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h6 className="col-title">OUR SERVICES</h6>
            <ul className="footer-list">
              {SERVICE_LINKS.map((service) => (
                <li key={service.label}>
                  <Link to={service.to}>{service.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h6 className="col-title">SUBSCRIBE NEWSLETTER</h6>
            <p className="newsletter-text">
              Get the latest updates and news.
            </p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
              />
              <button
                type="submit"
                aria-label="Subscribe"
                disabled={loading || !email.trim()}
              >
                {loading ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  <FaRegPaperPlane />
                )}
              </button>
            </form>
            {feedback.text && (
              <div className={`subscribe-feedback ${feedback.type}`}>
                {feedback.text}
              </div>
            )}
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="copyright">
            Copyright &copy; DKUST | All Rights Reserved
          </p>
          <div className="social-icons">
            <a href="#fb" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#tw" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#in" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#ig" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;