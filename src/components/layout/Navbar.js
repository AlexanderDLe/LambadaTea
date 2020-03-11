import React from 'react';
import logo from '../../img/LambadaNavLogo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <AnchorLink to="/" className="navbar-brand logo logoNav" href="#home">
          <img className="navbarLogo" src={logo} alt="" />
        </AnchorLink>
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
              <AnchorLink offset="50" className="nav-link" href="#about">
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
