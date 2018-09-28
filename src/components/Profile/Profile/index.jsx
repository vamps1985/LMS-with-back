import React, { Component } from 'react';
import './styles.scss';


import UserInfo from '../UserInfo';
import UserGroup from '../UserGroup';

export default class Profile extends Component {
  state = {
    id: '',
    name: '',
    surname: '',
    email: '',
    facebook: '',
    googlePlus: '',
    linkedin: '',
    userpic: '',
    group: '',
    groupstudents: []
  }

  profileUrl = 'http://localhost:3000/profile';

  componentDidMount() {
    fetch(`http://localhost:3000/profile`)  //${this.props.id}
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error fetching data. Response status: " + response.status + " : " + response.statusText);
      })
      .then(array => {
        const profile = array[3];
        const UserGroup = profile.group;
        const groupstudents = array.filter(users => users.group === profile.group && users.id !== profile.id );
        this.setState({
          id: profile.id,
          name: profile.name,
          surname: profile.surname,
          email: profile.email,
          facebook: profile.facebook,
          googlePlus: profile.googlePlus,
          linkedin: profile.linkedin,
          userpic:  profile.userpic,
          group: profile.group,
          groupstudents: groupstudents
        })
      })
      .catch(err => {
        console.error("Error: ", err);
      });
  }
  render() {
    // console.log(this.state);
    const { id, name, surname, email, facebook, googlePlus, linkedin, userpic, group, groupstudents } = this.state;
    return (
      <div className="Profile__contant">
        <UserInfo userId={id} name={name} surname={surname} email={email} facebook={facebook} googlePlus={googlePlus} linkedin={linkedin} userpic={userpic} />
        <UserGroup groupTitle={ group } groupStudents={groupstudents} />
      </div>);
  }
}
