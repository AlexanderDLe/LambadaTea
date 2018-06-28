import React from "react";

export default () => {
  return (
    <footer className="Footer">
      <hr />
      <div className="container">
        <div className="row">
          <div className="storeHours col-md-6 text-center">
            <h3 className="py-3">Store Hours</h3>
            <p className="lead">Open Daily:</p>
            <p className="lead">Mon - Sat: 8am - 11pm</p>
            <p className="lead">Sunday: 8am - 10pm</p>
          </div>
          <div className="col-md-6 text-center">
            <h3 className="py-3">Address</h3>
            <p className="lead">10563 Bolsa Ave.</p>
            <p className="lead">Garden Grove, CA 92843</p>
            <p className="lead">Garden Grove, CA 92843</p>
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
