/**
 * NPM import
 */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Popover } from 'antd';
import SignOutButton from '../LoginForm/SignOut';

/**
 * Local import
 */
import SimpleModalWrapped from 'src/components/Home/Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';
/**
 * Code
 */

const content = <div><LoginForm id="login-form" /></div>;
const Header = ({ authUser }) =>
  (<div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>);

const NavigationAuth = () =>

  (
    <header id="header">
      <TextField
        id="search"
        label="Search Profils"
        type="search"
        margin="none"
      />

      <div id="buttons">
        <SignOutButton />
        <SimpleModalWrapped id="signUp-button" />
      </div>
      <Avatar id="avatar" alt="USER" src="https://picsum.photos/200/300" />
    </header>
  );

const NavigationNonAuth = () =>
  (
    <header id="header">
      <TextField
        id="search"
        label="Search Profils"
        type="search"
        margin="none"
      />
      <div id="buttons">
        <Popover placement="bottom" content={content} trigger="click">
          <Button variant="raised" color="primary" id="logIn-button">
            Login
          </Button>
        </Popover>
        <SimpleModalWrapped id="signUp-button" />
      </div>
      <Avatar id="avatar" alt="USER" src="https://picsum.photos/200/300" />
    </header>
  );
/**
 * Export
 */
export default Header;
