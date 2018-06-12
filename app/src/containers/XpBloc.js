/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import XpBloc from 'src/components/CvUser/XpBloc';
import { toggleGradAbstract, toggleExpAbstract } from 'src/store/reducer';

/**
 * Code
 */
const mapStateToProps = state => ({
  togglePanel: state.togglePanel,
  graduations: state.graduations,
  experiences: state.experiences,
});

const mapDispatchToProps = dispatch => ({
  onToggleGradAbstract: id => () => {
    dispatch(toggleGradAbstract(id));
  },
  onToggleExpAbstract: id => () => {
    dispatch(toggleExpAbstract(id));
  },
});

const XpBlocContainer = connect(
  mapStateToProps, // Lecture depuis le state
  mapDispatchToProps, // Écriture dans le state
)(XpBloc);

/**
 * Export
 */
export default XpBlocContainer;
