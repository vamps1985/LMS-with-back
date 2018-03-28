import React from 'react';
import './styles.scss';
import UserPic from '../UserPic';

const ShortUserInfo = ({ user }) => (
  <div className="ShortUserInfo">
    <div className="ShortUserInfo__userpic">
      <UserPic userpic={ user.userpic }/>
      { user.isOnline === true && <div className="ShortUserInfo__isOnline" /> }
    </div>
    <p className="ShortUserInfo__name">{user.name} {user.surname}</p>
    <p className="ShortUserInfo__rating">[ {user.rating} баллов ]</p>
  </div>
);

export default ShortUserInfo;
