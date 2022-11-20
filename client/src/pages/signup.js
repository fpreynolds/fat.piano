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
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      const { token, user } = data.addUser;
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
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
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
            value={formState.username}
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
            value={formState.email}
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
            value={formState.password}
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
