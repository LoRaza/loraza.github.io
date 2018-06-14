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
        <h2 className="builder-title">Graduations</h2>
        <label htmlFor="gradEntitled">
          <span className="label-input-text">Entitled</span>
          <input
            id="gradEntitled"
            type="text"
            name="gradEntitled"
            className="text-input"
            placeholder="Graduation"
            value={this.props.gradEntitled}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="gradYear">
          <span className="label-input-text">Year</span>
          <input
            id="gradYear"
            type="text"
            name="gradYear"
            className="text-input"
            placeholder="Year"
            value={this.props.gradYear}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="gradAbstract">
          <span className="label-input-text">Abstract</span>
          <textarea
            id="gradAbstract"
            type="text"
            name="gradAbstract"
            className="text-input textarea-input"
            placeholder="Skills Learned"
            value={this.props.gradAbstract}
            onChange={this.handleChange}
          />
        </label>
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
