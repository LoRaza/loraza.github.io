/**
 * NPM import
 */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

/**
 * Local import
 */


/**
 * Code
 */
const Header = () => (
  <div id="app">
    <TextField
      id="search"
      label="Search Profils"
      type="search"
      margin="normal"
    />
    <div id="buttons">
      <Button variant="raised" color="primary" id="logIn-button">
        Login
      </Button>
      <Button variant="raised" color="primary" id="signIn-button">
        SignIn
      </Button>
    </div>
    <Avatar alt="Remy Sharp" src="images/animal.jpg" />

  </div>
);

/**
 * Export
 */
export default Header;
