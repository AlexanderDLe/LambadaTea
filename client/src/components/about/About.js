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
          <div className="col-lg-6 aboutSection">
            <i className="fas fa-leaf" />
            <h1 className="Title">About Us</h1>
            <hr />
            <p className="lead aboutText">
              We were two boba enthusiasts who were tired of the typical drinks
              made from powder and syrup, so we decided to turn these standard
              drinks into something more delightful by using fresh fruits and
              authentic roots.
              <br />
              <br />
              We understand the importance of time and patience required to
              deliver high quality flavors we're sure you'll enjoy. Our mission
              is to spread the love and smiles created from great tasting
              beverages!
            </p>
          </div>
          <div className="col-lg-6 aboutSection">
            <i className="fas fa-utensils" />
            <h1 className="Title">Fresh</h1>
            <hr />
            <p className="lead aboutText">
              We believe great taste starts with fresh ingredients and that's
              exactly what we offer. All of our teas are slow brewed with
              hand-picked quality tea leaves and made to order.
              <br />
              <br />
              Whether it's the refreshing drinks or the savory food that we
              serve, we guarantee we'll satisfy your taste buds. Give us a visit
              and share in the joy of Lambada!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
