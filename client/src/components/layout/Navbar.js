import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/LambadaNavLogo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default () => {
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light mb-3">
      <div className="container">
        <Link to="/" className="navbar-brand logo logoNav" href="#">
          <img className="navbarLogo" src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <AnchorLink className="nav-link" href="#home">
                Home
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink offset="90" className="nav-link" href="#about">
                About
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink offset="90" className="nav-link" href="#gallery">
                Gallery
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink offset="90" className="nav-link" href="#contact">
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
