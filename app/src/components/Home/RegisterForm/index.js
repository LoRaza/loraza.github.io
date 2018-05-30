/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import FaClose from 'react-icons/lib/fa/close'


/**
 * Local import
 */


/**
 * Code
 */
// class Register extends React.Component {
//   // Validation des props
//   // static propTypes = {
//   //   submit: PropTypes.function.isRequired,
//   //   inputValue: PropTypes.string.isRequired,
//   //   handleChangeValue: PropTypes.func.isRequired,
//   // };
//
//   /**
//    * Handlers
//    */
//   // handleChange = (evt) => {
//   //   const { value } = evt.target;
//   //   this.props.changeName(value);
//   // }
//
//   /**
//    * Rendu
//    */
//   render() {
const Register = () => (
  <div id="register-form">
    <div className="align-right">
      <FaClose
        className="close"
      />
    </div>
    <h2 className="form-title">Create your account to start building your CV or Portfolio</h2>
    <form
      action="index.html"
      // onSubmit={submit}
    >
      <div id="user-identity">
        <label id="firstname">
          Firstname
          <input
            type="text"
            placeholder="Your Firstname"
            // onChange={handleChangeValue}
          />
        </label>
        <label id="lastname">
          Lastname
          <input type="text" placeholder="Your Lastname" />
        </label>
      </div>
      <label id="register-mail">
        Email
        <input type="mail" placeholder="Your Email adress" />
      </label>
      <label>
        Password
        <input type="password" placeholder="Your Password (8 char, caps and number minus....)" />
      </label>
      <button type="submit">Create account</button>
    </form>
  </div>
);


/**
 * Export
 */
export default Register;
