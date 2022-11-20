import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container login">
      <h3 className="loginHeader">Login</h3>
      <div className="form">
        <form onSubmit={handleFormSubmit}>
          {/* <card> not recognized in react format */}
          <div className="flex-row">
            <label htmlFor="email">Email:</label>
            <input
              className="email"
              placeholder="Please enter your email here"
              name="email"
              type="email"
              //   value cannot be preset
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex-row">
            <label htmlFor="password">Password:</label>
            <input
              className="password"
              placeholder="********"
              name="password"
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex-row">
            <button className="formSubmit" type="submit">
              {" "}
              LOGIN{" "}
            </button>
          </div>
          <p className="Signup">
            Need to create an account?{" "}
            <Link to="/signup">Please signup here</Link>
          </p>
        </form>
        {error && (
          <div className="errorMessage">
            {"Login failed! Please signup first! Or try logging in again."}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
