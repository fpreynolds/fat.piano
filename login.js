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
  async function handleFormSubmit(event) {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      const { token, user } = data.login;
      console.log(user);
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
    setFormState({
      username: "",
      email: "",
      password: "",
    });
  }
  return (
    <div className="container login">
      <h3 className="loginHeader">Login</h3>
      <div className="form">
        <form onSubmit={handleFormSubmit}>
          {/* <card> not recognized in react format */}
          <div className="flex-row">
            <label htmlFor="username">Email:</label>
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
            <label htmlFor="secretPassword">Password:</label>
            <input
              className="password"
              placeholder="********"
              name="password"
              type="password"
              id="secretPassword"
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
        {error && <div className="errorMessage">{"Login failed! Please signup first! Or try logging in again."}</div>}
      </div>
    </div>
  );
}

export default Login;
