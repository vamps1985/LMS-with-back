import React, {Component, Fragment} from 'react';
import {Switch} from 'react-router-dom';
import PrivateRoute from '@/components/PrivateRoute'
import Header from '@/components/Common/Header';


import '@/styles/theme.scss';
import '@/styles/_var.scss';
import Registration from "@/components/Registration/registration";
import MainPage from "@/containers/views/MainPage";
import BoardPage from "@/containers/views/BoardPage";
import ProfilePage from "@/containers/views/ProfilePage";
import EditProfilePage from "@/containers/views/EditProfilePage";
import TheoryPage from "@/containers/views/TheoryPage";
import TestPage from "@/containers/views/TestPage";
import CalendarPage from "@/containers/views/CalendarPage";
import HomeworkPage from "@/containers/views/HomeworkPage";


class App extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        isLogin: true,
        surname: '',
        email: '',
        password:'',
        confirmPass: '',
        registration: false,
        showLogin: false,
        isvalid: false
    };



    handleInputOnChange = (evt) => {
        const value = evt.target.value;
        const name = evt.target.name;
        this.setState({
            [name]: value
        })
    };




// ButtonClick () {
//   this.setState({isopened: !this.state.isopened})
//   console.log(this.state)
// }
    showModal = (evt) => {
        const name = evt.target.name;
        this.setState( {
            [name]: true
        })

    };



registr = (evt) => {
    evt.preventDefault();

if (this.state.isvalid) {
console.log(this.state)
}
const {surname, email, password} = this.state;
const user = {
  name: surname,
  mail: email,
  pass: password
}

fetch("/echo/json/",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(user)
})
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })



};


    closeModal = (evt) => {
        const name = evt.target.name;
        this.setState( {
            [name]: false
        })
    };

    render() {
        const { isLogin, registration } = this.state;

        return (
            <Fragment>

                <Header showRegistr={this.showModal} isLogin={ isLogin }/>

                <Switch>
                    <PrivateRoute
                        exact path="/"
                        redirectTo="/board"
                        isLogin={!isLogin}
                        component={MainPage}
                    />
                    <PrivateRoute
                        path="/board"
                        redirectTo="/"
                        isLogin={isLogin}
                        component={BoardPage}
                    />
                    <PrivateRoute
                        path="/"
                        redirectTo="/profile"
                        isLogin={isLogin}
                        component={ProfilePage}
                    />
                    <PrivateRoute
                        path="/editprofile"
                        redirectTo="/"
                        isLogin={isLogin}
                        component={EditProfilePage}
                    />
                    <PrivateRoute
                        path="/"
                        redirectTo="/theory"
                        isLogin={isLogin}
                        component={TheoryPage}
                    />
                    <PrivateRoute
                        path="/test"
                        redirectTo="/"
                        isLogin={isLogin}
                        component={TestPage}
                    />
                    <PrivateRoute
                        path="/calendar"
                        redirectTo="/"
                        isLogin={isLogin}
                        component={CalendarPage}
                    />
                    <PrivateRoute
                        path="/homework"
                        redirectTo="/"
                        isLogin={isLogin}
                        component={HomeworkPage}
                    />


                </Switch>
                {registration && <Registration closeModal={this.closeModal} handleInputChange={this.handleInputOnChange} registr={this.registr} validation={this.validation}/>}

            </Fragment>

        );
    }
}

export default App;
