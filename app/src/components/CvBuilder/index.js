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
  <div id="cv-builder">
    <div id="graduations">
      <h2>Graduations</h2>
      <form
        action="index.html"
        id="graduations-block"
      >
        <label className="first-block-label">
          <input type="text" className="first-block-input"/>
        </label>
        <label className="second-block-label">
          <input type="text" className="second-block-input"/>
        </label>
        <label className="text-block-label">
          <textarea name="" className="text-block-input" />
        </label>
        <input type="submit" value="+ Add item"/>
      </form>
    </div>
    <div id="Experiences">
      <h2>Experiences</h2>
      <form
        action="index.html"
        id="graduations-block"
      >
        <label className="first-block-label">
          <input type="text" className="first-block-input"/>
        </label>
        <label className="second-block-label">
          <input type="text" className="second-block-input"/>
        </label>
        <label className="text-block-label">
          <textarea name="" className="text-block-input" />
        </label>
        <input type="submit" value="+ Add item"/>
      </form>
    </div>
    <div id="Skills">
      <h2>Skills</h2>
      <form
        action="index.html"
        id="graduations-block"
      >
        <label className="first-block-label">
          <input type="text" className="first-block-input"/>
        </label>
        <label className="text-block-label">
          <input type="rang" min="0" max="100"/>
        </label>
        <input type="submit" value="+ Add item"/>
      </form>
    </div>
  </div>
);

/**
 * Export
 */
export default CvBuilder;
