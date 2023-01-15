import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./register.css";
import { Navigate, Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      register_success: false,
      wrong_register: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
  }

  componentDidMount() {
    document.title = "Register";
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  register(event) {
    fetch("http://localhost:3000/users/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((res) => {
      try {
        res.json().then((value) => {
          if (value.success) {
            this.setState({ register_success: true });
          } else {
            this.setState({ wrong_register: value.message });
          }
        });
      } catch (err) {
        this.setState({ wrong_register: "", register_success: false });
      }
    });
    event.preventDefault();
  }

  render() {
    if (this.state.register_success) {
      return <Navigate to="/login" />;
    }
    let error_msg;
    if (this.state.wrong_register !== "") {
      error_msg = <div className="error">{this.state.wrong_register}</div>;
    } else {
      error_msg = null;
    }
    return (
      <div className="registerGroup">
        <h1>Welcome to NusHive</h1>
        <Form onSubmit={this.register}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={this.handleChange}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="Enter username"
              onChange={this.handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          {error_msg}
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    );
  }
}

export default Register;
