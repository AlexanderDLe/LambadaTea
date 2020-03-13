import React from 'react';
import fbIcon from '../../img/FB Icon.png';
import igIcon from '../../img/IG Icon.png';
import yIcon from '../../img/Y Icon.png';

export default () => {
    return (
        <footer className="Footer">
            <hr />
            <div className="container">
                <div className="row">
                    <div className="storeHours col-md-4">
                        <h5 className="py-2">Store Hours</h5>
                        <p className="footer-detail lead">Open Daily:</p>
                        <p className="footer-detail lead">
                            Mon - Sat: 9am - 11pm
                        </p>
                        <p className="footer-detail lead">Sunday: 9am - 10pm</p>
                    </div>
                    <div className="address col-md-4">
                        <h5 className="py-2">Address</h5>
                        <p className="footer-detail lead">10563 Bolsa Ave.</p>
                        <p className="footer-detail lead">
                            Garden Grove, CA 92843
                        </p>
                        <p className="footer-detail lead">United States</p>
                    </div>
                    <div className="col-md-4 footerIcons">
                        <a
                            href="https://www.facebook.com/Lambada-Tea-199556690681726/?ref=py_c"
                            className="icon"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="icon" src={fbIcon} alt="" />
                        </a>
                        <a
                            href="https://www.instagram.com/lambadatea/"
                            className="icon"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="icon" src={igIcon} alt="" />
                        </a>
                        <a
                            href="https://www.yelp.com/biz/lambada-tea-and-frizzle-garden-grove-4"
                            className="icon"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="icon2" src={yIcon} alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="">
                <p className="footerText text-white text-center bg-secondary py-5 mt-5">
                    <i className="fas fa-phone" /> (714) 263-0134
                    <br />
                    <br />
                    &copy; Lambada Tea & Frizzle Inc. All Rights Reserved
                </p>
            </div>
        </footer>
    );
};
