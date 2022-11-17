import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };
  const handleChange = (e) => {
    const { username, value } = e.target;
    setFormState({
      ...formState,
      [username]: value,
    });
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row">
          <label htmlFor="username">Username:</label>
          <input
            placeholder="Username..."
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="email@email.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row">
          <label htmlFor="password">Password:</label>
          <input
            placeholder="*******"
            name="password"
            type="password"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
