import React from 'react';
import './styles.scss';
import ShortUserInfo from '../ShortUserInfo';
import BtnLeft from '../Controls/BtnLeft';
import BtnRight from '../Controls/BtnRight';

const UserGroup = ({ groupTitle, groupStudents }) => (
  <div className="UserGroup">
    <h2 className="UserGroup__title">[ { groupTitle } _]</h2>
    <div className="UserGroup__gallery">
      <BtnLeft />
      <div className="UserGroup__users">
        { groupStudents.map(user => (
          <div className="UserGroup__item" key={user.id}>
            <ShortUserInfo user={user} />
          </div>
        ))
      }
      </div>
      <BtnRight />
    </div>
  </div>
);

export default UserGroup;
