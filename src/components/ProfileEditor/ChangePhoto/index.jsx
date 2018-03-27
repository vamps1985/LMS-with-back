import React from 'react';
import Title from "../Title";
import Ava from '@/components/Common/Ava';
import './styles.scss';

const ChangePhoto = () => {
  return (
    <div className="change_photo">
      <Ava/>
      <div className="change_photo__wrapper">
        <Title title="Изменить фото профиля"/>
        <div className="change_photo__button camera">Сделать фото</div>
        <div className="change_photo__button plus">Загрузить фото</div>
      </div>
    </div>
  );
};

export default ChangePhoto;
