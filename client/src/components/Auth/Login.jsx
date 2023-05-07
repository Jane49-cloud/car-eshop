import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({
    // username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginForm = event.currentTarget;
    if (loginForm.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    const data = {
      // username: form.username,
      password: form.password,
      email: form.email,
    };
    //  Axios
  };
  return (
    // <div className="login-form-container">
    <Form
      id="registration-form"
      className="border p-4 rounded login-form"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}>
      <div className="welcome-message">
        <h4>Welcome to car-eshop</h4>
        <p>Please login to continue</p>
      </div>
      {/* email */}
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          type="email"
          placeholder="Enter email"
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid email.
        </Form.Control.Feedback>
      </Form.Group>

      {/* password */}
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={form.password}
          minLength="8"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          type="password"
          placeholder="Password"
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid password.
        </Form.Control.Feedback>
      </Form.Group>
      <div className="text-content text-danger">{error && <p>{error}</p>}</div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p className="mt-3">
        Don't have an account ? <Link to={"/register"}> Sign up</Link>
      </p>
      <p className="mt-3">
        Forgot password? <a href="#">Reset Password</a>
      </p>
    </Form>
    // </div>
  );
};

export default LoginForm;
