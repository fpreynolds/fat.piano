import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="navbar">
          <ul className="flex-row">
            <li className="mx-1">
              <Link to="/key">Key</Link>
            </li>
            <li className="mx-1">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="mx-1">
              <Link to="/tracker">Trackers</Link>
            </li>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <li className="mx-1">
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="navbar">
          <ul className="flex-row">
            <li className="mx-1">
              <Link to="/signup">Signup</Link>
            </li>
            <li className="mx-1">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="Not Possum">
            🦝
          </span>
          click for home
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
