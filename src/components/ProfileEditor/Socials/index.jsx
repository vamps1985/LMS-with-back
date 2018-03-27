import React from 'react';
import Title from "../Title";
import './styles.scss';
import InputField from "../InputField";

const Socials = ({facebook, googlePlus, linkedin, onChange}) => {
  return (
    <div className="socials" onChange={(evt) => onChange(evt)} >
      <Title title="Социальные сети"/>
      <div className="socials__wrapper">
        <div className="inputWrapper">
          <div className="socials__icon socials__icon--facebook"/>
          <InputField id="facebook" className="input socials__input" type="text" text="" value={facebook}/>
        </div>
        <div className="inputWrapper">
          <div className="socials__icon socials__icon--google"/>
          <InputField id="googlePlus" className="input socials__input" type="text" text="" value={googlePlus}/>
        </div>
        <div className="inputWrapper">
          <div className="socials__icon socials__icon--linkedin"/>
          <InputField id="linkedin" className="input socials__input" type="text" text="" value={linkedin}/>
        </div>
      </div>
    </div>
  );
};

export default Socials;
