import React, {Component} from 'react';
import './style.scss';
import Registration from "@/components/Registration/registration";
import UserInfo from "@/components/Profile/UserInfo";

export default class MainPage extends Component {
    state = {
        name: '',
        surname: '',
        email: '',
        password:'',
        confirmPass: '',
    };
    handleInputOnChange = (evt) => {
        const value = evt.target.value;
        const name = evt.target.name;
        console.log(`${name}: ${value}`);
        this.setState({
            [name]: value
        })
    };
    render() {
        console.log(this.state);
        return (
            <div className="wrapper">
                <div>
                    <div className="container">
                        <div className="header">
                            <div className="logo">
                                <img className="logo__img" src="img/logo.png" alt="LOGO"/>

                            </div>
                            <form className="" action="index.html" method="post">
                                <button className="button-small" id="open_login" type="button" name="button">Log In
                                </button>
                                <button className="button-small" id="open_signin" type="button" name="button">Sign In
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="wrapper wrapper--light-gray">

                    <div className="container">
                        <div className="content">
                            <Registration handleInputChange={this.handleInputOnChange}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

