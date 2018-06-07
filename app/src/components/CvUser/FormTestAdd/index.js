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
const FormTestAdd = ({ onAddGraduationBloc }) => {
  const handleSubmit = (evt) => {
    // bloque le comportement par défaut
    evt.preventDefault();

    // j'execute addGraduationBloc (fonction provenant de App)
    onAddGraduationBloc();
  };

  return (
    <form
      id="form"
    >
      <input
        type="text"
        name="entitled"
        className="text-input entitled"
        placeholder="Graduation"
      />
      <input
        type="text"
        name="year"
        className="text-input year"
        placeholder="Year"
      />
      <input
        type="text"
        name="abstract"
        className="text-input abstract"
        placeholder="Skills Learned"
      />
      <button onClick={handleSubmit} className="button-add">Add graduation</button>
    </form>
  );
};

FormTestAdd.propTypes = {
  onAddGraduationBloc: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default FormTestAdd;
