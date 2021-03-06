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
class ExperienceForm extends React.Component {
  handleExpChange = (evt) => {
    const { name, value } = evt.target;
    // j'execute addGraduationBloc (fonction provenant de App)
    this.props.onInputExpChange({ name, value });
  }


  handleSubmit = (evt) => {
    // bloque le comportement par défaut
    evt.preventDefault();

    // j'execute addGraduationBloc (fonction provenant de App)
    this.props.onAddExperienceBloc();
  }

  render() {
    return (
      <form
        className="form"
      >
        <h2 className="builder-title">Experiences</h2>
        <label htmlFor="expEntitled">
          <span className="label-input-text">Entitled</span>
          <input
            id="expEntitled"
            type="text"
            name="expEntitled"
            className="text-input entitled"
            placeholder="Experience"
            value={this.props.expEntitled}
            onChange={this.handleExpChange}
          />
        </label>
        <label htmlFor="expYear">
          <span className="label-input-text">Year</span>
          <input
            id="expYear"
            type="text"
            name="expYear"
            className="text-input year"
            placeholder="Year"
            value={this.props.expYear}
            onChange={this.handleExpChange}
          />
        </label>
        <label htmlFor="expAbstract">
          <span className="label-input-text">Abstract</span>
          <textarea
            id="expAbstract"
            type="text"
            name="expAbstract"
            className="text-input textarea-input"
            placeholder="Skills Learned"
            value={this.props.expAbstract}
            onChange={this.handleExpChange}
          />
        </label>
        <button onClick={this.handleSubmit} className="button-add">Add experience</button>
      </form>
    );
  }
}

ExperienceForm.propTypes = {
  expEntitled: PropTypes.string.isRequired,
  expYear: PropTypes.string.isRequired,
  expAbstract: PropTypes.string.isRequired,
  onInputExpChange: PropTypes.func.isRequired,
  onAddExperienceBloc: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default ExperienceForm;
