/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
/**
 * Local import
 */


/**
 * Code
 */
const Footer = () => (
  <div id="home-footer">
    <p className="home-hangs">
      Create your own CV and portfolio and share it to the world.<br />
      <strong>AIM HIGHER</strong> is a builder of a new CV generation, forget the old way try <strong>AIM HIGHER</strong>.
    </p>
    <button className="cta">
      Discover last profiles >
    </button>
    <nav id="nav-dev">
      <NavLink className="nav-dev-link" exact to="/cvbuilder">CV Builder</NavLink>
      <NavLink className="nav-dev-link" exact to="/profilebuilder">Profile Builder</NavLink>
      <NavLink className="nav-dev-link" exact to="/portfoliobuilder">Portfolio Builder</NavLink>
      <NavLink className="nav-dev-link" exact to="/testCV">Test CV</NavLink>
    </nav>
  </div>
);

/**
 * Export
 */
export default Footer;
