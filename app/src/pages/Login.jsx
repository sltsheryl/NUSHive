import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";
import { Navigate, Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      remember: false,
      wrong_login: "",
      login_success: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    document.title = "Login";
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  login(event) {
    fetch("http://localhost:3000/users/login", {
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
            this.setState({ login_success: true });
          } else {
            this.setState({ wrong_login: value.message });
          }
        });
      } catch (err) {
        this.setState({ wrong_login: false, login_success: true });
      }
    });
    event.preventDefault();
  }

  render() {
    if (this.state.login_success) {
      return <Navigate to="/forum" />;
    }
    let error_msg;
    if (this.state.wrong_login !== "") {
      error_msg = <div className="error">{this.state.wrong_login}</div>;
    } else {
      error_msg = null;
    }
    return (
      <div className="loginGroup">
        <h1>Welcome to xxxx</h1>
        <Form onSubmit={this.login}>
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
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              name="remember"
              type="checkbox"
              label="Remember me"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <p className="d-inline"> or </p>
          <Link className="link" to="/register">
            Sign up now!
          </Link>
        </Form>
      </div>
    );
  }
}

export default Login;
