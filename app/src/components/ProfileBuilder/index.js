/**
 *NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */

/*
 * Code
 */
const ProfileBuilder = () => (
<div className="profile-form">
  <h2>Profile</h2>
  <form
    action="index.html"
    id="graduations-block"
  >
    <div className="half-block-input">
      <label className="firstname-label">
        Firstname :
        <input type="text" className="firstname-input"/>
      </label>
      <label className="lastname-label">
        Lastname :
        <input type="text" className="lastname-input"/>
      </label>
    </div>
    <label className="birthday-label">
      <input type="date"/>
    </label>
    <label className="adress-label">
      Adress :
      <input type="text" className="adress-input"/>
    </label>
    <div className="half-block-input">
      <label className="mail-label">
        Mail :
        <input type="mail" className ="mail-input"/>
      </label>
      <label className="phone-label">
        Phone :
        <input type="tel" className="phone-input"/>
      </label>
    </div>
  </form>
</div>
);

/**
 * Export
 */
export default ProfileBuilder;
