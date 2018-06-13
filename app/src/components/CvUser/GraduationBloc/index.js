/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */
import XpBloc from 'src/containers/XpBloc';

/**
 * Code
 */
const GraduationBloc = ({ graduations }) => (
  <div className="cv-bloc">
    <div className="cv-bloc-title">
      <div className="cv-bloc-icon"><i className="fas fa-graduation-cap" /></div>
      <h3 className="cv-section-title">Graduations</h3>
    </div>
    <div className="xp-bloc-container">
      {graduations.map(graduation => (
        <XpBloc
          key={graduation.id}
          {...graduation}
          blocType="graduation"
        />
      ))}
    </div>
  </div>
);

GraduationBloc.propTypes = {
  graduations: PropTypes.arrayOf(PropTypes.object).isRequired,

};
/**
 * Export
 */
export default GraduationBloc;
