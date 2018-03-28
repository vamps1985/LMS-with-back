import React, { Component } from 'react';
import './styles.scss';

import UserInfo from '../UserInfo';
import UserGroup from '../UserGroup';

export default class Profile extends Component {
  state = {
    GroupTitle: "[ Группа FE#3 _]"
  }

  render() {
    const { GroupTitle } = this.state;
    return (
      <div className="Profile__contant">
        <UserInfo />
        <UserGroup GroupTitle={ GroupTitle } />
      </div>);
  }
}
