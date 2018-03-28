import React from 'react';
import './styles.scss';

import { NavLink } from 'react-router-dom';

import UserPic from '../UserPic';
import Socials from '../Socials';
import EditPen from '../EditPen';


const UserInfo = ({userId, name, surname, email, facebook, googlePlus, linkedin, userpic}) => {
  const clsUserInfo="edit control__edit userinfo-edit";
  return (<div className="UserInfo">
    <div className="UserInfo__userpic">
      <UserPic userpic={userpic} />
    </div>
    <div className="UserInfo__editWrapper">
      <p className="UserInfo__name">{name} {surname}</p>
        <NavLink
          exact
          className="edit-profile"
          to={'/editprofile'}
        >
        <EditPen clsUserInfo={ clsUserInfo } userId={userId} />
        </NavLink>
    </div>
    <p className="UserInfo__mail">{email}</p>
    <Socials facebook={facebook} googlePlus={googlePlus} linkedin={linkedin} />
  </div>);
};


export default UserInfo;
