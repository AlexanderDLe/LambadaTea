import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default () => {
  return (
    <footer className="Footer">
      <hr />
      <div className="container">
        <div className="row">
          <div className="storeHours col-md-6 text-center">
            <h1 className="py-3">Store Hours</h1>
            <p className="lead">Monday-Friday: 9am - 10pm</p>
            <p className="lead">Saturday: 9am - 12pm</p>
            <p className="lead">Sunday: 11am - 11pm</p>
          </div>
          <div className="col-md-6">
            <ul className="navbar-nav ml-auto text-center mt-4">
              <li className="nav-item">
                <AnchorLink href="#home" className="nav-link">
                  Home
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink offset="90" href="#about" className="nav-link">
                  About
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink offset="90" href="#gallery" className="nav-link">
                  Gallery
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink offset="90" href="#contact" className="nav-link">
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-white text-center bg-secondary py-5 mt-5">
          &copy; Lambada Tea & Frizzle Inc. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
