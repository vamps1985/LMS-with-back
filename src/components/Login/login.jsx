import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ModalWindow from '../Common/ModalWindow';
import InputInModal from '../Common/InputInModal';
import Button from '../Common/Button';
import Socials from '../Common/Socials';
import FormErrors from '../Registration/FormErrors';
import './styles.scss';

const INITIAL_STATE = {
  email: '',
  password: '',
  rememberMe: false,
  formErrors: {
    email: '',
    password: '',
  },
  emailValid: false,
  passwordValid: false,
  formValid: false,
  wrongPassword: false,
  loginOK: false,
};

class Login extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleInputChange = evt => {
    const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    const name = evt.target.name;

    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false;
        fieldValidationErrors.email = emailValid ? '' : ' Введите существующий E-mail';
        break;
        
      case 'password':
        passwordValid = value.length >= 5 && value.length <= 32;
        fieldValidationErrors.password = passwordValid ? '' : 'Пароль должен содержать минимум 5 символов';
        break;
      
      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      this.validateForm,
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid,
    });
  }

  login = (evt) => {
    evt.preventDefault();

    const { email, password, formValid, rememberMe } = this.state;

    if (formValid) {
      const loginData = {
        email: email,
        password: password,
        rememberMe: rememberMe,
      } 

      fetch("http://localhost:3000/profile/",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(loginData)
      })
      .then(({ data, status }) => {
        if (status === 201) {
          console.log(data);
          this.setState({
            loginOK: true,
          })
        } else {
          this.setState({
            wrongPassword: true,
          })
        }
      })
      .catch(function(res){ console.log(res) })
    }
  }
  
  render() {
    const { email, password, rememberMe, formValid, wrongPassword } = this.state;
    // const { closeModal } = this.props;

    return (
      // <ModalWindow
      //   modalId="login"
      //   title="Вход _ "
      //   closeModal={closeModal}>

        <form method="#" className="login-form">
        { wrongPassword && <div className="mailError">Вы ввели неверный пароль/логин</div> }
        <InputInModal
            type="email"
            label="E-mail"
            inputName="email"
            placeholder="Alex123@gmail.com"
            description="Введите Ваш Email"
            req="required"
            handleInputChange={this.handleInputChange}
            value={email}
            noValid = {this.state.formErrors.email}
          />
          <InputInModal
            type="password"
            label="Пароль"
            inputName="password"
            placeholder=""
            description="Пароль должен быть не менее 5-ти символов без пробелов."
            req="required"
            handleInputChange={this.handleInputChange}
            value={password}
            noValid = {this.state.formErrors.password}
          />
          <InputInModal
            type="checkbox"
            label="Запомнить меня"
            inputName="rememberMe"
            placeholder=""
            description=""
            req=""
            handleInputChange={this.handleInputChange}
            noValid = ''
            checked = {rememberMe}
          />
          <div className="login-error-message" id="login-error-message">
            <FormErrors formErrors={this.state.formErrors} />
            
            <Link to="/restore-password" className="forgot-password-link">Забыли пароль?</Link>
          </div>
          <Button
            text="Войти"
            type="submit"
            name="submitLogin"
            onClick={this.login}
            cls="button-small"
            disabled={!formValid}
          />
          <Socials
            facebook="#"
            googlePlus="#"
            linkedin="#"
            cls="registration-social-icon"
            blockCls="registration-social-block"
            IconSize="2rem"
          />     
        </form>
    )
};
};

export default Login;
