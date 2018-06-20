/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import anime from 'animejs';
/**
 * Local import
 */
import XpBloc from 'src/containers/XpBloc';

/**
 * Code
 */

const ExperienceBloc = ({ experiences }) => (
  <div className="cv-bloc">
    <div className="cv-bloc-title experience">
      <div className="cv-bloc-icon"><i className="fas fa-suitcase" /></div>
      <h3 className="cv-section-title">Experiences</h3>
    </div>
    <TransitionGroup className="xp-bloc-container">
      {experiences.map(experience => (
        <CSSTransition
          key={experience.id}
          timeout={500}
          classNames="fade"
        >
          <XpBloc
            key={experience.id}
            {...experience}
          />
        </CSSTransition>
    ))}
    </TransitionGroup>
  </div>
);

ExperienceBloc.propTypes = {
  experiences: PropTypes.arrayOf(PropTypes.object).isRequired,
};
/**
 * Export
 */
export default ExperienceBloc;
