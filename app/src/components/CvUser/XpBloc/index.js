/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
/**
 * Local import
 */


/**
 * Code
 */


const XpBloc = ({
  entitled, year, abstract, active,
}) => {
  const showAbstractClass = classNames(
    'cv-bloc-abstract',
    { 'cv-bloc-abstract--show': active },
  );
  const switchIcon = classNames(active ? 'fas fa-chevron-circle-right' : 'fas fa-chevron-circle-down');

  return (
    <div className="bloc-wrapper">
      <div className="cv-bloc-added">
        <p className="cv-bloc-entitled">
          {entitled}
        </p>
        <p className="cv-bloc-year">
          {year}
        </p>
        <div className="abstract-toggle"><i className={switchIcon} /></div>
      </div>
      <div className={showAbstractClass}>
        {abstract}
      </div>
    </div>
  );
};

XpBloc.propTypes = {

  entitled: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  abstract: PropTypes.string,
  active: PropTypes.bool.isRequired,
};
/**
 * Export
 */
export default XpBloc;

//
// const XpBloc = ({
//   id, entitled, year, abstract, onToggleAbstract, active,
// }) => {
//   const showAbstractClass = classNames(
//     'cv-bloc-abstract',
//     { 'cv-bloc-abstract--show': active },
//   );
//   const switchIcon = classNames(active ? 'fas fa-chevron-circle-right' : 'fas fa-chevron-circle-down');
//
//   return (
//     <div className="bloc-wrapper">
//       <div className="cv-bloc-added">
//         <p className="cv-bloc-entitled">
//           {entitled}
//         </p>
//         <p className="cv-bloc-year">
//           {year}
//         </p>
//         <div className="abstract-toggle"><i className={switchIcon} onClick={onToggleAbstract(id)} /></div>
//       </div>
//       <div className={showAbstractClass}>
//         {abstract}
//       </div>
//     </div>
//   );
// };
//
// XpBloc.propTypes = {
//   id: PropTypes.number.isRequired,
//   entitled: PropTypes.string.isRequired,
//   year: PropTypes.string.isRequired,
//   abstract: PropTypes.string,
//   active: PropTypes.bool.isRequired,
//   onToggleAbstract: PropTypes.func.isRequired,
// };
