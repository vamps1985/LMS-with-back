import React from 'react';
import './styles.scss';

const InputField = ({className, type, text, value, id}) => {
  return (
    <input id={id} className={className} type={type} placeholder={text} value={value}/>
  );
};

export default InputField;
