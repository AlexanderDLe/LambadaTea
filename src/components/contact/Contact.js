import React, { Component } from 'react';
import logo from '../../img/LambadaNavLogo.png';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
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

    axios.post('/', {
      name,
      email,
      message
    });

    this.setState({
      name: '',
      email: '',
      message: ''
    });
  };

  render() {
    return (
      <section id="contact" className="bg-light py-5">
        <div className="container">
          <h1 className="Title display-4 text-center">Contact</h1>
          <div className="row">
            <div className="col-lg-9">
              <Form onSubmit={this.handleSubmit} className="pt-5">
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
                    className="form-control"
                    placeholder="Name"
                  />
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
                    className="form-control"
                    placeholder="Email"
                  />
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
                    className="form-control"
                    placeholder="Message"
                    rows="5"
                  />
                </FormGroup>
                <Button className="btn btn-secondary btn-block btn-lg">
                  Submit{' '}
                </Button>
              </Form>
            </div>

            <div className="col-lg-3 align-self-center">
              <img src={logo} alt="" className="img-fluid align-center" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
