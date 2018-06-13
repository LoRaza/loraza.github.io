/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */

/**
 * Code
 */
class GraduationForm extends React.Component {
  handleChange = (evt) => {
    const { name, value } = evt.target;
    // j'execute addGraduationBloc (fonction provenant de App)
    this.props.onInputGradChange({ name, value });
  }


  handleSubmit = (evt) => {
    // bloque le comportement par défaut
    evt.preventDefault();

    // j'execute addGraduationBloc (fonction provenant de App)
    this.props.onAddGraduationBloc();
  }

  render() {
    return (
      <form
        className="form"
      >
        <input
          type="text"
          name="gradEntitled"
          className="text-input entitled"
          placeholder="Graduation"
          value={this.props.gradEntitled}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="gradYear"
          className="text-input year"
          placeholder="Year"
          value={this.props.gradYear}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="gradAbstract"
          className="text-input abstract"
          placeholder="Skills Learned"
          value={this.props.gradAbstract}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit} className="button-add">Add graduation</button>
      </form>
    );
  }
}

GraduationForm.propTypes = {
  gradEntitled: PropTypes.string.isRequired,
  gradYear: PropTypes.string.isRequired,
  gradAbstract: PropTypes.string.isRequired,
  onInputGradChange: PropTypes.func.isRequired,
  onAddGraduationBloc: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default GraduationForm;
