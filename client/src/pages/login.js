import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);
  const handleChange = (e) => {
    const { username, value } = e.target;
    setFormState({
      ...formState,
      [username]: value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.log(e);
    }
    setFormState({
      username: "",
      password: "",
    });
  };
  return (
    <div className="container login">
      <h3 className="loginHeader">Login</h3>
      <div className="form">
        <form onSubmit={handleFormSubmit}>
          {/* <card> not recognized in react format */}
          <div className="flex-row">
            <label htmlFor="username">Username:</label>
            <input
              className="username"
              placeholder="Please enter your username here"
              name="user"
              type="text"
              //   value cannot be preset
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
        {error && <div className="errorMessage">{error.message}</div>}
      </div>
    </div>
  );
}

export default Login;
