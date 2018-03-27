import React from 'react';
import pensil from '@/components/board/pensil.png';
import './styles.scss';

const EditPen = ({ clsUserInfo }) => (
  <div className={ clsUserInfo }>
    <img src={pensil} alt="edit" />
  </div>
);

export default EditPen;
