/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import PortfolioBuilder from 'src/components/PortfolioBuilder';

/**
 * Code
 */
const mapStateToProps = state => ({
  slides: state.slides,
});


const PortfolioBuilderContainer = connect(
  mapStateToProps, // Lecture depuis le state
  null, // Écriture dans le state
)(PortfolioBuilder);

/**
 * Export
 */
export default PortfolioBuilderContainer;
