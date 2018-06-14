/**
 * NPM import
 */
import React from 'react';
// import { TransitionGroup, Transition } from 'react-transition-group';
// import anime from 'animejs';
import classNames from 'classnames';
import PropTypes from 'prop-types';
/**
 * Local import
 */

import ProfileBloc from 'src/containers/ProfileBloc';
// import SkillBloc from 'src/components/CvUser/SkillBloc';
import GraduationBloc from 'src/components/CvUser/GraduationBloc';
import ExperienceBloc from 'src/components/CvUser/ExperienceBloc';
import GraduationForm from 'src/containers/GraduationForm';
import ExperienceForm from 'src/containers/ExperienceForm';
import ProfileForm from 'src/containers/ProfileForm';
/**
 * Code
 */
class CvUser extends React.Component {
  render() {
    const switchIconPanel = classNames(this.props.togglePanel ? 'fas fa-angle-right' : 'fas fa-angle-left');
    const togglePanelClass = classNames({ 'toggle-panel': this.props.togglePanel });
    const toggleCvClass = classNames({ 'toggle-cv': this.props.togglePanel });
    return (
      <div>
        <div id="cv-builder-form" className={togglePanelClass}>
          <div id="panel-toggler" onClick={this.props.onTogglePanel} ><i className={switchIconPanel} /></div>
          <h1 className="panel-title">Your CV Builder</h1>
          <ProfileForm className={togglePanelClass} />
          <GraduationForm className={togglePanelClass} />
          <ExperienceForm className={togglePanelClass} />
        </div>
        <div id="cv-user" className={toggleCvClass}>
          <ProfileBloc />
          <GraduationBloc
            graduations={this.props.graduations}
          />
          <ExperienceBloc
            experiences={this.props.experiences}
          />
        </div>
      </div>

    );
  }
}

CvUser.propTypes = {
  togglePanel: PropTypes.bool.isRequired,
  onTogglePanel: PropTypes.func.isRequired,
  graduations: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  experiences: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
/**
 * Export
 */
export default CvUser;
