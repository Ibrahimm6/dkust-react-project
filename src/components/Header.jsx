import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 

const Header = () => {
  return (
    <header className="site-header custom-navy-bg border-bottom border-secondary border-opacity-25">
      <div className="container header-inner">
        <nav className="navbar navbar-expand-lg navbar-dark py-3">
          <Link className="navbar-brand fw-bold text-white tracking-wide" to="/">DKUST</Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3 align-items-center">
              <li className="nav-item"><NavLink className="nav-link text-white nav-text" to="/">HOME</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-white nav-text" to="/about">ABOUT</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-white nav-text" to="/portfolio">PORTFOLIO</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-white nav-text" to="/products">PRODUCTS</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-white nav-text" to="/services">SERVICES</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-white nav-text" to="/blog">BLOG</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-white nav-text" to="/resources">RESOURCES</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-white nav-text" to="/quiz">QUIZ</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link text-white nav-text" to="/contact">CONTACT</NavLink></li>
              
              <li className="nav-item ms-lg-3 d-flex gap-2">
                <Link className="btn btn-outline-success text-white border-green px-4 py-1 btn-login" to="/login">LOGIN</Link>
                <Link className="btn btn-outline-success text-white border-green px-4 py-1 btn-login" to="/register">REGISTER</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;