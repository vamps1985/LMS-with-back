import React from 'react';
import Title from "../Title";
import './styles.scss';
import InputField from "../InputField";

const ChangePassword = ({onChange}) => {
  return (
    <div className="change_pass" onChange={(evt) => onChange(evt)} >
      <Title title="Изменить пароль" />
      <InputField id="oldpass" className="input" type="password" text="Старый пароль"/>
      <InputField id="newpass" className="input" type="password" text="Новый пароль"/>
      <InputField id="confirmpass" className="input" type="password" text="Повторить новый пароль"/>

    </div>
  );
};

export default ChangePassword;
