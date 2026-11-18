import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  { key: "footer.aboutUs", to: PathConstants.ABOUT },
  { key: "footer.services", to: PathConstants.SERVICES },
  { key: "footer.portfolio", to: PathConstants.PORTFOLIO },
  { key: "footer.blog", to: PathConstants.BLOG },
  { key: "footer.contactUs", to: PathConstants.CONTACT },
];

const SERVICE_LINKS = [
  { key: "footer.webDev", to: PathConstants.SERVICES },
  { key: "footer.ml", to: PathConstants.SERVICES },
  { key: "footer.robotics", to: PathConstants.SERVICES },
  { key: "footer.consulting", to: PathConstants.SERVICES },
  { key: "footer.dataAnalytics", to: PathConstants.SERVICES },
];

const Footer = () => {
  const { t } = useTranslation();
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
        text: t("footer.subscribeSuccess"),
      });
    } else {
      setFeedback({
        type: "error",
        text: response.data?.message || t("footer.subscribeError"),
      });
    }
  };

  return (
    <FooterWrapper>
      <div className="container">
        <div className="footer-top">
          <div className="footer-col">
            <h6 className="col-title">{t("footer.contactDetail")}</h6>
            <ul className="footer-list">
              <li>
                {t("footer.addressLine1")}
                <br />
                {t("footer.addressLine2")}
              </li>
              <li>{t("footer.phone")}</li>
              <li>{t("footer.email")}</li>
            </ul>
          </div>

          <div className="footer-col">
            <h6 className="col-title">{t("footer.quickLinks")}</h6>
            <ul className="footer-list">
              {QUICK_LINKS.map((link) => (
                <li key={link.key}>
                  <Link to={link.to}>{t(link.key)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h6 className="col-title">{t("footer.ourServices")}</h6>
            <ul className="footer-list">
              {SERVICE_LINKS.map((service) => (
                <li key={service.key}>
                  <Link to={service.to}>{t(service.key)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h6 className="col-title">{t("footer.subscribeTitle")}</h6>
            <p className="newsletter-text">{t("footer.subscribeText")}</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
              />
              <button
                type="submit"
                aria-label={t("footer.subscribeTitle")}
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
          <p className="copyright">{t("footer.copyright")}</p>
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