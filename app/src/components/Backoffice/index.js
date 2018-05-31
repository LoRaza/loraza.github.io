/**
 *NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import CvBuilder from '../CvBuilder';
import ProfileBuilder from '../ProfileBuilder';
/*
 * Code
 */
const BackOffice = () => (
  <div className="backoffice">
    <ProfileBuilder />
    <CvBuilder />

  </div>

);

/*
 * Export
 */
export default BackOffice;
