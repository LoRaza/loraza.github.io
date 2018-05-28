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
  <header id="header">
    <TextField
      id="search"
      label="Search Profils"
      type="search"
      margin="none"
    />

    <div id="buttons">
      <Button variant="raised" color="primary" id="logIn-button">
        Login
      </Button>
      <Button variant="raised" color="primary" id="signIn-button">
        SignIn
      </Button>
    </div>
    <Avatar id="avatar" alt="USER" src="https://picsum.photos/200/300" />

  </header>
);

/**
 * Export
 */
export default Header;
