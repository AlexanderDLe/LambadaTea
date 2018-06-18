import React, { Component } from 'react';
import logo from '../../img/LambadaNavLogo.png';

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="bg-light my-5">
        <div className="container">
          <h1 className="Title display-4 text-center">Contact</h1>
          <div className="row">
            <div className="col-lg-9">
              <h3>Get In Touch</h3>

              <form>
                <div className="input-group input-group-lg mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>

                <div className="input-group input-group-lg mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="far fa-envelope" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>

                <div className="input-group input-group-lg mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-pencil-alt" />
                    </span>
                  </div>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Message"
                    rows="5"
                  />
                </div>
                <input
                  type="submit"
                  value="submit"
                  className="btn btn-secondary btn-block btn-lg"
                />
              </form>
            </div>

            <div className="col-lg-3 align-self-center">
              <img src={logo} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
