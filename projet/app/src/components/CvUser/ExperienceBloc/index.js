/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */
import XpBloc from 'src/components/CvUser/XpBloc';

/**
 * Code
 */
const ExperienceBloc = ({ experiences }) => (
  <div className="cv-bloc">
    <div className="cv-bloc-title">
      <div className="cv-bloc-icon"><i className="fas fa-suitcase" /></div>
      <h3 className="cv-section-title">Experiences</h3>
    </div>
    <div className="xp-bloc-container">
      {experiences.map(experience => (
        <XpBloc
          key={experience.id}
          {...experience}
        />
      ))}
    </div>
  </div>
);

ExperienceBloc.propTypes = {
  experiences: PropTypes.arrayOf(PropTypes.object).isRequired,
};
/**
 * Export
 */
export default ExperienceBloc;

//
// const ExperienceBloc = ({ experiences, onToggleAbstract }) => (
//   <div id="cv-bloc">
//     <div className="cv-bloc-title">
//       <div className="cv-bloc-icon"><i className="fas fa-suitcase" /></div>
//       <h3 className="cv-section-title">Experiences</h3>
//     </div>
//     <div className="xp-bloc-container">
//       {experiences.map(experience => (
//         <XpBloc
//           key={experience.id}
//           {...experience}
//           onToggleAbstract={onToggleAbstract}
//         />
//       ))}
//     </div>
//   </div>
// );
