import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { auth } from 'src/firebase';
import * as routes from '../../constants/routes.js';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class loginForm extends Component {
  constructor() {
    super();
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password).then(() => {
      this.setState(() => ({ ...INITIAL_STATE }));
      history.push(routes.ACCOUNT);
    }).catch((error) => {
      this.setState(byPropKey('error', error));
    });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div id="login-form" >
         <Form inline onSubmit={this.onSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" value={email} onChange={event => this.setState(byPropKey('email', event.target.value))} />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" value={password} onChange={event => this.setState(byPropKey('password', event.target.value))}  />
        </FormGroup>
        <Button disabled={isInvalid} type="submit">Submit</Button>
        { error && <p>{error.message}</p> }
      </Form>
       </div>
    );
  }
}

export default loginForm;
