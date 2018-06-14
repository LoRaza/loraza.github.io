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
        <h2 className="builder-title">Profile</h2>
        <div className="input-wrapper">
          <label htmlFor="firstname">
            <span className="label-input-text">Firstname</span>
            <input
              id="firstname"
              type="text"
              name="firstname"
              className="text-input"
              placeholder="Firstname"
              value={this.props.firstname}
              onChange={this.handleExpChange}
            />
          </label>
          <label htmlFor="lastname">
            <span className="label-input-text">Lastname</span>
            <input
              id="lastname"
              type="text"
              name="lastname"
              className="text-input"
              placeholder="Lastname"
              value={this.props.lastname}
              onChange={this.handleExpChange}
            />
          </label>
        </div>
        <label htmlFor="birthday">
          <span className="label-input-text">Birth date</span>
          <input
            id="birthday"
            type="text"
            name="birthday"
            className="text-input"
            placeholder="Birth date"
            value={this.props.birthday}
            onChange={this.handleExpChange}
          />
        </label>
        <label htmlFor="adress">
          <span className="label-input-text">Adress</span>
          <input
            id="adress"
            type="text"
            name="adress"
            className="text-input"
            placeholder="Adress"
            value={this.props.adress}
            onChange={this.handleExpChange}
          />
        </label>
        <div className="input-wrapper">
          <label htmlFor="mail">
            <span className="label-input-text">Mail</span>
            <input
              id="mail"
              type="text"
              name="mail"
              className="text-input"
              placeholder="Mail"
              value={this.props.mail}
              onChange={this.handleExpChange}
            />
          </label>
          <label htmlFor="phone">
            <span className="label-input-text">Phone</span>
            <input
              id="phone"
              type="text"
              name="phone"
              className="text-input"
              placeholder="Phone"
              value={this.props.phone}
              onChange={this.handleExpChange}
            />
          </label>
        </div>
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
