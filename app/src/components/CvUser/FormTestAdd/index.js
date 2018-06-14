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
class FormTestAdd extends React.Component {
  handleChange = (evt) => {
    if (this.props.blocType === 'graduation') {
      const { name, value } = evt.target;
      // j'execute addGraduationBloc (fonction provenant de App)
      this.props.onInputGradChange({ name, value });
    }
    if (this.props.blocType === 'experience') {
      const { name, value } = evt.target;
      this.props.onInputExpChange({ name, value });
    }
  }


  handleSubmit = (evt) => {
    // bloque le comportement par défaut
    evt.preventDefault();
    if (this.props.blocType === 'graduation') {
      // j'execute addGraduationBloc (fonction provenant de App)
      this.props.onAddGraduationBloc();
    }
    if (this.props.blocType === 'experience') {
      this.props.onAddExperienceBloc();
    }
  }

/*
 * Ici j'essaye de rendre mon formulaire duplicable en lui passant juste une props de type blocType (graduation ou experience)
 * cependant les inputs n'ont pas l'air d'aimer le ternaire et j'ai un warning sur le fait que mon component soit controlled or uncontrolled
 * et lors de l'ajout dans le state, seul une des input est prise en compte.
 * Je vais donc essayer de différencier mon formulaire et donc créer un composant par type (graduation ou experience) au lieu d'en faire un unique hybride
 */
  render() {
    return (
      <form
        id="form"
      >
        <input
          type="text"
          name="entitled"
          className="text-input entitled"
          placeholder={this.props.blocType}
          value={this.props.blocType === 'graduation' ? this.props.inputGrad.entitled : this.props.inputExp.entitled}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="year"
          className="text-input year"
          placeholder="Year"
          value={this.props.blocType === 'graduation' ? this.props.inputGrad.year : this.props.inputExp.year}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="abstract"
          className="text-input abstract"
          placeholder="Skills Learned"
          value={this.props.blocType === 'graduation' ? this.props.inputGrad.abstract : this.props.inputExp.abstract}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit} className="button-add">Add {this.props.blocType}</button>
      </form>
    );
  }
}

FormTestAdd.propTypes = {
  inputGrad: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  inputExp: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  onInputGradChange: PropTypes.func.isRequired,
  onInputExpChange: PropTypes.func.isRequired,
  onAddGraduationBloc: PropTypes.func.isRequired,
  onAddExperienceBloc: PropTypes.func.isRequired,
  blocType: PropTypes.string.isRequired,
};
/**
 * Export
 */
export default FormTestAdd;
