/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ExperienceForm from 'src/components/CvUser/ExperienceForm';
import { inputChange, addExperienceBloc, toggleExpAbstract } from 'src/store/reducer';

/**
 * Code
 */
const mapStateToProps = state => ({
  expEntitled: state.expEntitled,
  expYear: state.expYear,
  expAbstract: state.expAbstract,
});

const mapDispatchToProps = dispatch => ({
  onAddExperienceBloc: () => {
    dispatch(addExperienceBloc());
  },

  onInputExpChange: ({ name, value }) => {
    dispatch(inputChange({ name, value }));
  },

  onToggleExpbstract: id => () => {
    dispatch(toggleExpAbstract(id));
  },

});

const ExperienceFormContainer = connect(
  mapStateToProps, // Lecture depuis le state
  mapDispatchToProps, // Écriture dans le state
)(ExperienceForm);

/**
 * Export
 */
export default ExperienceFormContainer;
