/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
    <TransitionGroup className="xp-bloc-container">
      {graduations.map(graduation => (
        <CSSTransition
          key={graduation.id}
          timeout={500}
          classNames="fade"
        >
          <XpBloc
            key={graduation.id}
            {...graduation}
            blocType="graduation"
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </div>

);

GraduationBloc.propTypes = {
  graduations: PropTypes.arrayOf(PropTypes.object).isRequired,

};
/**
 * Export
 */
export default GraduationBloc;


// const GraduationBloc = ({ graduations }) => (
//   <div className="cv-bloc">
//     <div className="cv-bloc-title">
//       <div className="cv-bloc-icon"><i className="fas fa-graduation-cap" /></div>
//       <h3 className="cv-section-title">Graduations</h3>
//     </div>
//     <div className="xp-bloc-container">
//       {graduations.map(graduation => (
//         <XpBloc
//           key={graduation.id}
//           {...graduation}
//           blocType="graduation"
//         />
//       ))}
//     </div>
//   </div>
// );
