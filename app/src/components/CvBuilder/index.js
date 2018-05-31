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
const CvBuilder = () => (
  <form
    action="index.html"
    id="graduations-block"
  >
    <label className="first-block-label">
      <input type="text"/>
    </label>
    <label className="second-block-label">
      <input type="text"/>
    </label>
    <label className="text-block-label">
      <textarea name="" className="text-block-input" />
    </label>
  </form>
);

/**
 * Export
 */
export default CvBuilder;
