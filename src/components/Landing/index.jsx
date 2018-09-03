import React, {Component} from 'react';
import './style.scss';
import Registration from "@/components/Registration/registration";
import UserInfo from "@/components/Profile/UserInfo";
import Login from "@/components/Login";

export default class Landing extends Component {
    state = {
        checked: false,
    };
    handleRememberMe = () => {

        return (this.setState(prevState => ({
                    checked: !prevState.checked
                })
            )
        );
    };

    render() {

        return (

            <div className="wrapper landing__content">


                    <Login handleRememberMe={this.handleRememberMe} checked={this.state.checked}/>
            </div>

        );
    };
}

