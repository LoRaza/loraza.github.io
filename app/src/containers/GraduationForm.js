/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import GraduationForm from 'src/components/CvUser/GraduationForm';
import { inputChange, addGraduationBloc, toggleGradAbstract } from 'src/store/reducer';

/**
 * Code
 */
const mapStateToProps = state => ({
  gradEntitled: state.gradEntitled,
  gradYear: state.gradYear,
  gradAbstract: state.gradAbstract,
});

const mapDispatchToProps = dispatch => ({
  onAddGraduationBloc: () => {
    dispatch(addGraduationBloc());
  },

  onInputGradChange: ({ name, value }) => {
    dispatch(inputChange({ name, value }));
  },

  onToggleGradAbstract: id => () => {
    dispatch(toggleGradAbstract(id));
  },

});

const GraduationFormContainer = connect(
  mapStateToProps, // Lecture depuis le state
  mapDispatchToProps, // Écriture dans le state
)(GraduationForm);

/**
 * Export
 */
export default GraduationFormContainer;
