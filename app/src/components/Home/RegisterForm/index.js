import React, { Component } from 'react';
import classnames from 'classnames';
import FaClose from 'react-icons/lib/fa/close';
import { auth } from 'src/firebase';


const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});
const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};
class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';

    return (
        <div id="register-form">
          <div className="align-right">
            <FaClose
             className="close"
            />
            <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        { error && <p>{error.message}</p> }
      </form>
          </div>
          <h2 className="form-title">Create your account to start building<br/> your CV or Portfolio</h2>
        </div>
    );
  }
}

export default RegisterForm;

{/* <form onSubmit={this.onSubmit}>
  <div id="user-identity">
  <label id="firstname">
  Firstname
    <input
      type="text"
      placeholder="Your name"
      name="name"
      value={this.state.name}
      onChange={event => this.setState(byPropKey('name', event.target.value))}
    />
  </label>
  </div>
  <label id="register-mail">
  Email
    <input type="mail"
           placeholder="Your Email adress"
           name="email"
           value={this.state.email}
           onChange={event => this.setState(byPropKey('email', event.target.value))} />
  </label>
  <label>
  Password
    <input type="password"
           placeholder="Your Password"
           name="password"
           value={this.state.password}
           onChange={event => this.setState(byPropKey('password', event.target.value))} />
  </label>
  <button type="submit">Create account</button>
  { error && <p>{error.message}</p> }
</form> */}