import React from 'react';

export default () => {
  return (
    <footer className="Footer">
      <hr />
      <div className="container">
        <div className="row">
          <div className="storeHours col-md-6">
            <h4 className="py-3">Store Hours</h4>
            <p className="lead">Open Daily:</p>
            <p className="lead">Mon - Sat: 9am - 11pm</p>
            <p className="lead">Sunday: 9am - 10pm</p>
          </div>
          <div className="col-md-6">
            <h4 className="py-3">Address</h4>
            <p className="lead">10563 Bolsa Ave.</p>
            <p className="lead">Garden Grove, CA 92843</p>
            <p className="lead">United States</p>
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
