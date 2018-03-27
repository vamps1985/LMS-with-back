import React from 'react';
import Title from "../Title";
import './styles.scss';
import InputField from "../InputField";

const MainInfo = ({name, surname, email, onChange}) => {

  return (
    <div className="main_info" onChange={(evt) => onChange(evt)} >
      <Title title="Основная информация"/>
      <InputField id="name" className="input" type="text" text="Имя" value={name}  />
      <InputField id="surname" className="input" type="text" text="Фамилия" value={surname} />
      <InputField id="email" className="input" type="email" text="email" value={email} />
    </div>
  );
};

export default MainInfo;
