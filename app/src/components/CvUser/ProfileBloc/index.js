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
const ProfileBloc = (firstname, lastname, birthday, adress, mail, phone, urlPicture) => (
  <div className="cv-profile-bloc">

  </div>
);

ProfileBloc.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  birthday: PropTypes.instanceOf(Date).isRequired,
  adress: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  urlPicture: PropTypes.string.isRequired,
};
/**
 * Export
 */
export default ProfileBloc;
