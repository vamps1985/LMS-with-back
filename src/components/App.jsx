import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Header from '@/components/Common/Header';
import MainContainer from '@/components/Common/MainContainer';
import Landing from '@/components/Landing'

import '@/styles/theme.scss';
import '@/styles/_var.scss';
import Registration from "@/components/Registration/registration";


class App extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        isLogin: false,
        surname: '',
        email: '',
        password:'',
        confirmPass: '',
        registration: false,
        showLogin: false,
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
                {isLogin ? <MainContainer/> : <Landing/>}
                {registration && <Registration closeModal={this.closeModal} handleInputChange={this.handleInputOnChange}/>}

            </Fragment>

        );
    }
}

export default App;
