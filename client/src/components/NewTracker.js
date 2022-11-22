import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_TRACKER } from "../utils/mutations";

const NewTracker = () => {
  const [formState, setFormState] = useState({
    theme: "",
  });
  const [addTracker] = useMutation(ADD_TRACKER);
  const handleFormSubmit = async (e) => {
    const theme = formState.theme;
    console.log(theme);
    e.preventDefault();
    try {
      const { theme } = await addTracker();
      Auth.saveTheme(theme);
      console.log(theme);
    } catch (e) {
      console.log(theme);
      console.log(e);
    }
    setFormState({
      theme: "",
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
      <h2>New Tracker</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row">
          <label htmlFor="tracker">Tracker Name:</label>
          <input
            placeholder="Tracker Name"
            name="theme"
            type="theme"
            id="theme"
            value={formState.theme}
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

export default NewTracker;