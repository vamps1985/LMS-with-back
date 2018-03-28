import React from 'react';
import './styles.scss';


const UserPic = ({ userpic }) => (
  <img src={ userpic } className="UserPic" alt="" />
);

export default UserPic;
