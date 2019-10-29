import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a
            className="navbar-item"
            href="https://bulma.io/images/bulma-logo.png"
          >
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma" />
          </a>
          <a
            className="navbar-item"
            href="https://bulma.io/images/bulma-logo.png"
          >
            <button className="button is-white">Home</button>
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <button className="button is-info">Login</button>
              </p>
              <p className="control">
                <button className="button is-success">Sign Up</button>
              </p>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
