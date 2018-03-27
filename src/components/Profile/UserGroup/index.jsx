import React from 'react';
import './styles.scss';
import ShortUserInfo from '../ShortUserInfo';
import BtnLeft from '../Controls/BtnLeft';
import BtnRight from '../Controls/BtnRight';

const UserGroup = ({ GroupTitle }) => (
  <div className="UserGroup">
    <h2 className="UserGroup__title">{ GroupTitle }</h2>
    <div className="UserGroup__gallery">
      <BtnLeft />
      <div className="UserGroup__users">
        <ShortUserInfo />
        <ShortUserInfo />
        <ShortUserInfo />
        <ShortUserInfo />
        <ShortUserInfo />
      </div>
      <BtnRight />
    </div>
  </div>
);

export default UserGroup;
