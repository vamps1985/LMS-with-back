import React from 'react';
import './styles.scss';
import Title from "../Title";

const Lock = ({isClosed, onClick}) => {
  return (
    <div className="lock" onClick={onClick}>
      <div className= {isClosed ? "lock__icon lock__icon--close" : "lock__icon lock__icon--open"} />
      <Title title = {isClosed ? "Сделать мой профиль открытым" : "Сделать мой профиль закрытым"} />
    </div>
  );
};

export default Lock;
