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
  noValid
}) => (
  <div className='input-block-wrapper'>
  <div
    className={`${type === 'checkbox' ? 'checkbox-block' : 'input-block'} ${ !noValid && value !== '' && 'valid'}`}
    data-description={description}>
    <label className = {`input-label ${req && 'required-star'}`} htmlFor={inputName}>
      {label}
    </label>
    <input
      className={`form-input ${ noValid && 'no-valid'}`}
      type={type}
      name={inputName}
      id={inputName}
      placeholder={placeholder}
      onChange={handleInputChange}
      required={req}
      data-description={description}
      value = {value}
    />
  </div>
  </div>
);

InputInModal.defaultProps = {
  label: '',
  inputName: '',
  placeholder: '',
  description: '',
  required: '',
  handleInputChange: () => {},
};

InputInModal.propTypes = {
  handleInputChange: PropTypes.func,
  label: PropTypes.string,
  inputName: PropTypes.string,
  placeholder: PropTypes.string,
  description: PropTypes.string,
  required: PropTypes.string,
};

export default InputInModal;
