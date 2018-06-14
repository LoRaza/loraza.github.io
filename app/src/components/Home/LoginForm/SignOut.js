import React from 'react';
import Button from '@material-ui/core/Button';
import { auth } from 'src/firebase';

const SignOutButton = () =>
<Button
    type="button"
    onClick={auth.doSignOut}
    variant="raised" color="primary" id="logIn-button"
  >
    Sign Out
  </Button>;
export default SignOutButton;
