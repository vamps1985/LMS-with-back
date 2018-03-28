import React from 'react';
import './styles.scss';
import UserPic from '../UserPic';

const ShortUserInfo = () => (
  <div className="ShortUserInfo">
    <div className="ShortUserInfo__userpic">
      <UserPic />
      <div className="ShortUserInfo__isOnline" />
    </div>
    <p className="ShortUserInfo__name">Вадим Озаринский</p>
    <p className="ShortUserInfo__rating">[ xxx баллов ]</p>
  </div>
);

export default ShortUserInfo;
