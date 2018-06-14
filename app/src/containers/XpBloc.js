/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import XpBloc from 'src/components/CvUser/XpBloc';
import { toggleGradAbstract, toggleExpAbstract, deleteGrad, deleteExp } from 'src/store/reducer';

/**
 * Code
 */
const mapStateToProps = state => ({
  togglePanel: state.togglePanel,
});

const mapDispatchToProps = dispatch => ({
  onToggleGradAbstract: id => () => {
    dispatch(toggleGradAbstract(id));
  },
  onToggleExpAbstract: id => () => {
    dispatch(toggleExpAbstract(id));
  },
  onDeleteGrad: id => () => {
    dispatch(deleteGrad(id));
  },
  onDeleteExp: id => () => {
    dispatch(deleteExp(id));
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
