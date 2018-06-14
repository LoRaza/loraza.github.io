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
      <div className="info-wrapper">
        <div>Firstname | </div>
        <div>Lastname | </div>
        <div>Birthday | </div>
        <div>Adress | </div>
        <div>Mail | </div>
        <div>Phone | </div>
      </div>
      <div className="data-wrapper">
        <div className="profile-info">{firstname}</div>
        <div className="profile-info">{lastname}</div>
        <div className="profile-info">{birthday}</div>
        <div className="profile-info">{adress}</div>
        <div className="profile-info">{mail}</div>
        <div className="profile-info">{phone}</div>
      </div>
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
