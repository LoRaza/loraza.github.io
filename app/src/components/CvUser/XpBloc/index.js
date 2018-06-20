/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Local import
 */


/**
 * Code
 */


const XpBloc = ({
  entitled,
  year,
  abstract,
  active,
  id,
  blocType,
  onToggleGradAbstract,
  onToggleExpAbstract,
  onDeleteGrad,
  onDeleteExp,
  togglePanel,
}) => {
  const showAbstractClass = classNames(
    'cv-bloc-abstract',
    { 'cv-bloc-abstract--show': active },
  );
  const switchIcon = classNames(active ? 'fas fa-chevron-circle-right' : 'fas fa-chevron-circle-down');
  const showDeleteItem = classNames(togglePanel ? 'hide-delete-item' : 'delete-item');
  const customBloc = classNames(blocType === 'graduation' ? 'bloc-wrapper-grad' : 'bloc-wrapper');
  return (
    <div className={customBloc}>
      <div className="cv-bloc-added">
        <p className="cv-bloc-entitled">
          {entitled}
        </p>
        <p className="cv-bloc-year">
          {year}
        </p>
        <div className="abstract-toggle"><i className={switchIcon} onClick={blocType === 'graduation' ? onToggleGradAbstract(id) : onToggleExpAbstract(id)} /></div>
        <div className={showDeleteItem}><i className="far fa-trash-alt" onClick={blocType === 'graduation' ? onDeleteGrad(id) : onDeleteExp(id)} /></div>
      </div>
      <div className={showAbstractClass}>
        {abstract}
      </div>
    </div>
  );
};

XpBloc.propTypes = {
  togglePanel: PropTypes.bool.isRequired,
  onDeleteExp: PropTypes.func.isRequired,
  onDeleteGrad: PropTypes.func.isRequired,
  onToggleGradAbstract: PropTypes.func.isRequired,
  onToggleExpAbstract: PropTypes.func.isRequired,
  blocType: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  entitled: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  abstract: PropTypes.string,
  active: PropTypes.bool.isRequired,
};
/**
 * Export
 */
export default XpBloc;
