import React, {Component} from 'react';
import './style.scss';
import Registration from "@/components/Registration/registration";
import UserInfo from "@/components/Profile/UserInfo";

export default class Landing extends Component {
    state = {};

    render() {
        const {registration} = this.state;
        return (

                <div className="wrapper landing__content">

                    <div className="container">

                            {/*<img className="landing-image" src="@/images/it.jpg" alt=" hello"/>*/}

                    </div>
                </div>

        );
    };
}

