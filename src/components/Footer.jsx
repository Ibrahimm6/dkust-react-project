import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer bg-white pt-5 pb-3">
      <div className="container footer-columns mb-4">
        <div className="row gx-4 gy-4">
          
          <div className="col-lg-3 col-md-6 footer-col">
            <h6 className="fw-bold mb-3 text-dark footer-heading">CONTACT DETAIL</h6>
            <ul className="list-unstyled text-muted footer-text">
              <li>123 Business Street, Suite 100,<br />New York, NY 10001</li>
              <li>Phone: +1 234 567 8900</li>
              <li>Email: info@dkust.com</li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 footer-col">
            <h6 className="fw-bold mb-3 text-dark footer-heading">QUICK LINKS</h6>
            <ul className="list-unstyled footer-text">
              <li><Link to="/about" className="text-decoration-none">About Us</Link></li>
              <li><Link to="/services" className="text-decoration-none">Services</Link></li>
              <li><Link to="/portfolio" className="text-decoration-none">Portfolio</Link></li>
              <li><Link to="/blog" className="text-decoration-none">Blog</Link></li>
              <li><Link to="/contact" className="text-decoration-none">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 footer-col">
            <h6 className="fw-bold mb-3 text-dark footer-heading">OUR SERVICES</h6>
            <ul className="list-unstyled footer-text">
              <li><Link to="/services/web" className="text-decoration-none">Web Development</Link></li>
              <li><Link to="/services/ml" className="text-decoration-none">Machine Learning</Link></li>
              <li><Link to="/services/robotics" className="text-decoration-none">Robotics</Link></li>
              <li><Link to="/services/consulting" className="text-decoration-none">Industrial Consulting</Link></li>
              <li><Link to="/services/analytics" className="text-decoration-none">Data Analytics</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-4 col-md-6 footer-col">
            <h6 className="fw-bold mb-3 text-dark footer-heading">SUBSCRIBE NEWSLETTER</h6>
            <p className="text-muted footer-text mb-3">Get the latest updates and news.</p>
            <form className="d-flex newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" className="form-control me-0 rounded-end-0 border-end-0 shadow-none" placeholder="Email Address" required />
              <button className="btn custom-btn-green rounded-start-0 px-3 newsletter-btn" type="submit">
                <i className="far fa-paper-plane"></i>
              </button>
            </form>
          </div>

        </div>
      </div>
      
      <div className="container">
        <hr className="footer-divider" />
      </div>
      
      <div className="container footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center pt-2 mt-2">
        <p className="text-muted mb-0 footer-text">Copyright &copy; DKUST | All Rights Reserved</p>
        
        <div className="social-icons mt-3 mt-md-0 d-flex gap-2">
          <a href="#fb" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#tw" aria-label="Twitter"><FaTwitter /></a>
          <a href="#in" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="#ig" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;