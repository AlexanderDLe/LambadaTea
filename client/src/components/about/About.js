import React from 'react';
import logo from '../../img/LambadaLogo.png';

export default () => {
  return (
    <div className="About pt-3 pb-5 center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img className="aboutLogo" src={logo} alt="Logo" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 aboutSection">
            <i className="fas fa-leaf" />
            <h1 className="Title">About Us</h1>
            <hr />
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              ratione perferendis quisquam non! Iure, officia qui illo inventore
              corporis sequi.
            </p>
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
              cumque id quod amet ut odio in deserunt porro doloremque,
              praesentium aspernatur expedita minima voluptatibus officiis
              reiciendis.
            </p>
          </div>
          <div className="col-md-6 aboutSection">
            <i className="fas fa-utensils" />
            <h1 className="Title">Philosophy</h1>
            <hr />
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              ratione perferendis quisquam non! Iure, officia qui illo inventore
              corporis sequi.
            </p>
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
              cumque id quod amet ut odio in deserunt porro doloremque,
              praesentium aspernatur expedita minima voluptatibus officiis
              reiciendis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
