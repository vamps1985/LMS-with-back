import React, {Component} from 'react';
import './styles.scss';


import Button from '@/components/Common/Button';
import ChangePhoto from "./ChangePhoto";
import MainInfo from "./MainInfo";
import ChangePassword from "./ChangePassword";
import Socials from "./Socials";
import Lock from "./Lock";

export default class ProfileEditor extends Component {
  state = {
    id: "",
    name: "",
    surname: "",
    email: "",
    pass: "",
    facebook: "",
    googlePlus: "",
    linkedin: "",
    isClosed: true,
    oldPass: "",
    newPass: "",
    confirmPass: "",
  };

  profileUrl = 'http://localhost:3000/profile';

  componentDidMount() {
    fetch(`${this.profileUrl}?id=001`)  //${this.props.id}
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error fetching data. Response status: " + response.status + " : " + response.statusText);
      })
      .then(array => {
        const profile = array[0];
        this.setState({
          id: profile.id,
          name: profile.name,
          surname: profile.surname,
          email: profile.email,
          pass: profile.pass,
          facebook: profile.facebook,
          googlePlus: profile.googlePlus,
          linkedin: profile.linkedin,
          isClosed: profile.isClosed
        })
      })
      .catch(err => {
        console.error("Error: ", err);
      });
  }

  onClick = () => {
    this.state.isClosed ? this.setState({isClosed: false}) : this.setState({isClosed: true});
  };

  onChange = (evt) => {
    const value = evt.target.value;

    switch (evt.target.id) {
      case "name":
        this.setState({name: value});
        break;
      case "surname":
        this.setState({surname: value});
        break;
      case "email":
        this.setState({email: value});
        break;
      case "oldpass":
        this.setState({oldPass: value});
        break;
      case "newpass":
        this.setState({newPass: value});
        break;
      case "confirmpass":
        this.setState({confirmPass: value});
        break;
      case "facebook":
        this.setState({facebook: value});
        break;
      case "googlePlus":
        this.setState({googlePlus: value});
        break;
      case "linkedin":
        this.setState({linkedin: value});
        break;
    }
  };

  onSubmit = () => {
    const id = this.state.id;

    const updateUrl = `${this.profileUrl}/${id}`;
    console.log(`Fetching URL: ${updateUrl}`);

    const updated = {};

    updated.headers = {
      'Content-Type': 'application/json'
    };
    updated.method = "PATCH";

    updated.body = JSON.stringify({
      "name": this.state.name,
      "surname": this.state.surname,
      "email": this.state.email,
      "pass": this.state.pass,
      "facebook": this.state.facebook,
      "googlePlus": this.state.googlePlus,
      "linkedin": this.state.linkedin,
      "isClosed": this.state.isClosed
    });

    if (confirm("Внести изменения?")) {

      fetch(updateUrl, updated)
        .then(response => {
          if (response.ok) {
            response.json();
          } else {
            throw new Error("Error fetching data. Response status: " + response.status + " : " + response.statusText);
          }
        })
    }
  };

  render() {
    return (
      <div className="profile_editor">
        <ChangePhoto/>
        <MainInfo name={this.state.name} surname={this.state.surname} email={this.state.email}
                  onChange={this.onChange}/>
        <ChangePassword onChange={this.onChange}/>
        <Lock isClosed={this.state.isClosed} onClick={this.onClick}/>
        <Socials facebook={this.state.facebook} googlePlus={this.state.googlePlus} linkedin={this.state.linkedin}
                 onChange={this.onChange}/>
        <Button className="button profile_editor__button" text={"Сохранить"} onClick={this.onSubmit}/>
      </div>
    );
  }
}

ProfileEditor.propTypes = {};

