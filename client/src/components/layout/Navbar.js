import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/LambadaNavLogo.png';

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
              <Link to="/" className="nav-link" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" href="#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" href="#">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
