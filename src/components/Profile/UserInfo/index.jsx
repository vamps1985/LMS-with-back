import React from 'react';
import './styles.scss';

import UserPic from '../UserPic';
import Socials from '../Socials';
import EditPen from '../EditPen';


const UserInfo = () => {
  const clsUserInfo="edit control__edit userinfo-edit";
  return (<div className="UserInfo">
    <div className="UserInfo__userpic">
      <UserPic />
    </div>
    <div className="UserInfo__editWrapper">
      <p className="UserInfo__name">Александр Разумовский</p>
      <EditPen clsUserInfo={ clsUserInfo } />
    </div>
    <p className="UserInfo__mail">somemail@gmail.com</p>
    <Socials />
  </div>);
};


export default UserInfo;
