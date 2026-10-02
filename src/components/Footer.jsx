import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer bg-white pt-5 pb-3">
      <div className="container footer-columns mb-4">
        <div className="row gx-4 gy-4">
          <div className="col-lg-3 col-md-6 footer-col">
            <h6 className="fw-bold mb-4 text-dark fs-7 tracking-wide">CONTACT DETAIL</h6>
            <ul className="list-unstyled text-muted small">
              <li className="mb-3 lh-lg">123 Business Street, Suite 100,<br />New York, NY 10001</li>
              <li className="mb-3">Phone: +1 234 567 8900</li>
              <li className="mb-3">Email: info@dkust.com</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 footer-col">
            <h6 className="fw-bold mb-4 text-dark fs-7 tracking-wide">QUICK LINKS</h6>
            <ul className="list-unstyled small">
              <li className="mb-3"><a href="#about" className="text-decoration-none text-muted">About Us</a></li>
              <li className="mb-3"><a href="#services" className="text-decoration-none text-muted">Services</a></li>
              <li className="mb-3"><a href="#portfolio" className="text-decoration-none text-muted">Portfolio</a></li>
              <li className="mb-3"><a href="#blog" className="text-decoration-none text-muted">Blog</a></li>
              <li className="mb-3"><a href="#contact" className="text-decoration-none text-muted">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-col">
            <h6 className="fw-bold mb-4 text-dark fs-7 tracking-wide">OUR SERVICES</h6>
            <ul className="list-unstyled small">
              <li className="mb-3"><a href="#web" className="text-decoration-none text-muted">Web Development</a></li>
              <li className="mb-3"><a href="#ml" className="text-decoration-none text-muted">Machine Learning</a></li>
              <li className="mb-3"><a href="#robotics" className="text-decoration-none text-muted">Robotics</a></li>
              <li className="mb-3"><a href="#consulting" className="text-decoration-none text-muted">Industrial Consulting</a></li>
              <li className="mb-3"><a href="#analytics" className="text-decoration-none text-muted">Data Analytics</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 footer-col">
            <h6 className="fw-bold mb-4 text-dark fs-7 tracking-wide">SUBSCRIBE NEWSLETTER</h6>
            <p className="text-muted small mb-3">Get the latest updates and news.</p>
            <form className="d-flex">
              <input type="email" className="form-control me-0 rounded-end-0 border-end-0" placeholder="Email Address" />
              <button className="btn custom-btn-green rounded-start-0 px-3" type="button"><i className="far fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
      </div>
      
      <hr className="mb-4 mt-2 text-muted border-light opacity-10" />
      
      <div className="container footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="text-muted mb-0 small text-micro">Copyright &copy; DKUST | All Rights Reserved</p>
        
        <div className="social-icons mt-3 mt-md-0 d-flex gap-2">
          <a href="#fb" className="text-muted"><i className="fab fa-facebook-f"></i></a>
          <a href="#tw" className="text-muted"><i className="fab fa-twitter"></i></a>
          <a href="#in" className="text-muted"><i className="fab fa-linkedin-in"></i></a>
          <a href="#ig" className="text-muted"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;