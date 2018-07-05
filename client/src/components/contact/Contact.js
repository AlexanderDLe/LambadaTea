import React, { Component } from 'react';
import logo from '../../img/LambadaNavLogo.png';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import axios from 'axios';
import classnames from 'classnames';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, email, message } = this.state;

    const emailData = { name, email, message };

    axios
      .post('/', emailData)
      .then(() => console.log('Success'))
      .catch(err => this.setState({ errors: err.response.data }));
  };

  render() {
    const { errors } = this.state;

    return (
      <section id="contact" className="bg-light py-5">
        <div className="container">
          <h1 className="Title display-4 text-center">Contact</h1>
          <div className="row">
            <div className="col-lg-9">
              <Form noValidate onSubmit={this.handleSubmit} className="pt-5">
                <FormGroup className="input-group input-group-lg mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user" />
                    </span>
                  </div>
                  <Input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    className={classnames('form-control', {
                      'is-invalid': errors.name
                    })}
                    placeholder="Name"
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </FormGroup>

                <FormGroup className="input-group input-group-lg mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="far fa-envelope" />
                    </span>
                  </div>
                  <Input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    className={classnames('form-control', {
                      'is-invalid': errors.email
                    })}
                    placeholder="Email"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </FormGroup>

                <FormGroup className="input-group input-group-lg mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-pencil-alt" />
                    </span>
                  </div>
                  <Input
                    type="textarea"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    className={classnames('form-control', {
                      'is-invalid': errors.message
                    })}
                    placeholder="Message"
                    rows="5"
                  />
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </FormGroup>
                <Button className="btn btn-secondary btn-block btn-lg submitButton">
                  Submit{' '}
                </Button>
              </Form>
            </div>

            <div className="col-lg-3 align-self-center text-center">
              <img
                src={logo}
                alt=""
                className="contactLogo img-fluid align-center p-3"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
