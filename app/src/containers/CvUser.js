/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import CvUser from 'src/components/CvUser';
import { togglePanelView } from 'src/store/reducer';

/**
 * Code
 */
const mapStateToProps = state => ({
  togglePanel: state.togglePanel,
  graduations: state.graduations,
  experiences: state.experiences,
  profile: state.profile,
});

const mapDispatchToProps = dispatch => ({
  onTogglePanel: () => {
    dispatch(togglePanelView());
  },
});

const CvUserContainer = connect(
  mapStateToProps, // Lecture depuis le state
  mapDispatchToProps, // Écriture dans le state
)(CvUser);

/**
 * Export
 */
export default CvUserContainer;
