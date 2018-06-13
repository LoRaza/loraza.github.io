/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */

/**
 * Code
 */
class ProfileForm extends React.Component {
  handleExpChange = (evt) => {
    const { name, value } = evt.target;
    // j'execute addGraduationBloc (fonction provenant de App)
    this.props.onInputProfileChange({ name, value });
  }


  handleSubmit = (evt) => {
    // bloque le comportement par défaut
    evt.preventDefault();

    // j'execute addGraduationBloc (fonction provenant de App)
    this.props.onSaveProfile();
  }

  render() {
    return (
      <form
        className="form"
      >
        <input
          type="text"
          name="firstname"
          className="text-input entitled"
          placeholder="Firstname"
          value={this.props.firstname}
          onChange={this.handleExpChange}
        />
        <input
          type="text"
          name="lastname"
          className="text-input year"
          placeholder="Lastname"
          value={this.props.lastname}
          onChange={this.handleExpChange}
        />
        <input
          type="text"
          name="birthday"
          className="text-input abstract"
          placeholder="Birthday"
          value={this.props.birthday}
          onChange={this.handleExpChange}
        />
        <input
          type="text"
          name="adress"
          className="text-input entitled"
          placeholder="Adress"
          value={this.props.adress}
          onChange={this.handleExpChange}
        />
        <input
          type="text"
          name="mail"
          className="text-input year"
          placeholder="Mail"
          value={this.props.mail}
          onChange={this.handleExpChange}
        />
        <input
          type="text"
          name="phone"
          className="text-input abstract"
          placeholder="Phone"
          value={this.props.phone}
          onChange={this.handleExpChange}
        />
        <button onClick={this.handleSubmit} className="button-add">Save</button>
      </form>
    );
  }
}

ProfileForm.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onInputProfileChange: PropTypes.func.isRequired,
  onSaveProfile: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default ProfileForm;
