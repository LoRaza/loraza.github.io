/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */


/**
 * Code
 */
const ProfileBloc = ({
  firstname, lastname, birthday, adress, mail, phone, urlPicture,
}) => (
  <div className="cv-bloc-profile">
    <div className="cv-picture-bloc">
      <img src={urlPicture} alt="Profile" className="profile-pic" />
    </div>
    <div className="cv-profile-bloc">
      <div>Firstname | <span className="profile-info">{firstname}</span></div>
      <div>Lastname | <span className="profile-info">{lastname}</span></div>
      <div>Birthday | <span className="profile-info">{birthday}</span></div>
      <div>Adress | <span className="profile-info">{adress}</span></div>
      <div>Mail | <span className="profile-info">{mail}</span></div>
      <div>Phone | <span className="profile-info">{phone}</span></div>
    </div>
  </div>
);

ProfileBloc.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  urlPicture: PropTypes.string.isRequired,
};
/**
 * Export
 */
export default ProfileBloc;
