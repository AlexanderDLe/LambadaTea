import React from 'react';
import logo from '../../img/LambadaLogo.png';

export default () => {
  return (
    <div id="about" className="About pt-3 pb-5 center">
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
            <p className="lead aboutText">
              We were two boba enthusiasts who were tired of typical drinks made
              from pure powder and syrup, so we decided to turn these standard
              drinks into more quality by using real fruits and actual roots.
              <br />
              <br />
              After understanding the importance of time and patience put into
              every cup, we decided that we wanted to share these delicious
              drinks with everyone else!
            </p>
          </div>
          <div className="col-md-6 aboutSection">
            <i className="fas fa-utensils" />
            <h1 className="Title">Fresh</h1>
            <hr />
            <p className="lead aboutText">
              We believe great taste starts with fresh ingredients, and that's
              exactly what we offer. Whether it's the drinks or the food that we
              serve, we guarantee we'll satisfy your taste buds.
              <br />
              <br />
              All of our teas are slow brewed with quality tea leaves and made
              to order. Come try any of our drinks and notice our quality!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
