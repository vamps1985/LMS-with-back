import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const InputInModal = ({
  type,
  handleInputChange,
  label,
  inputName,
  placeholder,
  description,
  req,
  value,
  noValid,
  checked,
}) => (
  <div className='input-block-wrapper'>
  <div
    className={`${type === 'checkbox' ? 'checkbox-block' : 'input-block'} ${ !noValid && value !== '' && 'valid'}`}
    data-description={description}>
    <label className = {`input-label ${req && 'required-star'}`} htmlFor={inputName}>
      {label}
    </label>
    <input
      className={`form-input ${ noValid.length !== 0 && 'no-valid'}`}
      type={type}
      name={inputName}
      id={inputName}
      placeholder={placeholder}
      onChange={handleInputChange}
      required={req}
      data-description={description}
      value = {value}
      checked = {checked}
    />
  </div>
  </div>
);

InputInModal.defaultProps = {
  type: 'text',
  label: '',
  inputName: '',
  placeholder: '',
  description: '',
  required: '',
  handleInputChange: () => {},
  value: '',
  noValid: '',
  checked: false,
};

InputInModal.propTypes = {
  type: PropTypes.string,
  handleInputChange: PropTypes.func,
  label: PropTypes.string,
  inputName: PropTypes.string,
  placeholder: PropTypes.string,
  description: PropTypes.string,
  required: PropTypes.string,
  value: PropTypes.string,
  noValid: PropTypes.string,
  checked: PropTypes.bool,
};

export default InputInModal;
