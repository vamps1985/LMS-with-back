import React from 'react';
import './styles.scss';
import userpic from '@/components/Profile/userpic1.jpg';

const UserPic = () => (
  <img src={ userpic } className="UserPic" alt="" />
);

export default UserPic;
