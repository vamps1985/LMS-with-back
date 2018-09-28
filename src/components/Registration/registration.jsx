import React, { Component } from 'react';
import ModalWindow from '../Common/ModalWindow';
import InputInModal from '../Common/InputInModal';
import Button from '../Common/Button';
import Socials from '../Common/Socials';
import FormErrors from './FormErrors';
import './styles.scss';

const INITIAL_STATE = {
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPass: '',
  policy: false,
  formErrors: {
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPass: '',
    policy: '',
  },
  nameValid: false,
  surnameValid: false,
  emailValid: false,
  passwordValid: false,
  confirmPassValid: false,
  formValid: false,
  policyValid: false,
  registrationOK: false,
  emailError: false,
};

class Registration extends Component {
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
    let nameValid = this.state.nameValid;
    let surnameValid = this.state.surnameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let confirmPassValid = this.state.confirmPassValid;
    let policyValid = this.state.policyValid;
    let password = this.state.password;
    let confirmPass = this.state.confirmPass;

    switch (fieldName) {
      case 'name':
        nameValid = value.match(
          /^[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+((\s[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+)+)?$|^[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+((\s[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+)+)?$|^[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+((\s[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+)+)?$/i,
        ) ? true : false;

        fieldValidationErrors.name = nameValid
          ? ''
          : ' Имя должно начинаться с заглавной буквы и не содержать цифр.';
        break;

        case 'surname':
        surnameValid = value.match(
          /^[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+((\s[A-Z]{1}([^а-яёєіїґ’'`]i?)[a-z]+)+)?$|^[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+((\s[А-ЯЁ]{1}([^a-zєіїґ’'`]i?)[а-яё]+)+)?$|^[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+((\s[А-ЯЄІЇҐ’'`]{1}([^a-zыэъ]i?)[а-яєіїґ’'`]+)+)?$/i) ? true : false;

        fieldValidationErrors.surname = surnameValid
          ? ''
          : ' Фамилия должна начинаться с заглавной буквы и не содержать цифр.';
        break;
        
        case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false;
        fieldValidationErrors.email = emailValid ? '' : ' Введите существующий E-mail';
        break;
        
        case 'password':
        passwordValid = value.length >= 5 && value.length <= 32;
        fieldValidationErrors.password = passwordValid ? '' : 'Пароль должен содержать минимум 5 символов';

        if (passwordValid && confirmPass !== '') {
        confirmPassValid = value === confirmPass;
        fieldValidationErrors.confirmPass = confirmPassValid ? '' : 'Введенные Вами пароли не совпадают'; } 
        break;

        case 'confirmPass':
        confirmPassValid = value === password;
        fieldValidationErrors.confirmPass = confirmPassValid ? '' : 'Введенные Вами пароли не совпадают'; 
        break;

        case 'policy':
        policyValid = value;
        fieldValidationErrors.policy = policyValid ? '' : 'Ознакомьтесь и согласитесь с политикой о конфиденциальности'; 
        break;
        
        default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        nameValid: nameValid,
        surnameValid: surnameValid,
        emailValid: emailValid,
        passwordValid: passwordValid,
        confirmPassValid: confirmPassValid,
        policyValid: policyValid,
      },
      this.validateForm,
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.nameValid && this.state.surnameValid &&this.state.emailValid && this.state.passwordValid && this.state.confirmPassValid && this.state.policyValid,
    });
  }

  registration= (evt) => {
    evt.preventDefault();

    const { name, surname, email, password, formValid } = this.state;

    if (formValid) {
      const newUser = {
        id: email,
        name: name, 
        surname: surname,
        email: email,
        password: password
      } 

      fetch("http://localhost:3000/profile",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(newUser)
      })
      .then(({ status }) => {
        if (status === 201) {
          this.setState({
            registrationOK: true,
          })
        } else {
          console.log('MailError')
          this.setState({
            emailError: true,
          })
        }
      })
      .catch(function(res){ console.log(res) })
    }
  }

  render() {
    const { name, surname, email, password, confirmPass, policy, formValid, emailError } = this.state;
    const { closeModal } = this.props;

    return (
      <ModalWindow
        modalId="registration"
        title="Регистрация _ "
        closeModal={closeModal}>
        <form method="#" className="registration-form">
          { emailError && <div className="mailError">Пользователь с таким E-mail уже существует.</div> }
          <InputInModal
            type="text"
            label="Имя"
            inputName="name"
            placeholder="Александр"
            description="Введите свое имя с заглавной буквы."
            req="required"
            handleInputChange={this.handleInputChange}
            value={name}
            noValid = {this.state.formErrors.name}
          />

          <InputInModal
            type="text"
            label="Фамилия"
            inputName="surname"
            placeholder="Разумовский"
            description="Введите свою фамилию с заглавной буквы."
            req="required"
            handleInputChange={this.handleInputChange}
            value={surname}
            noValid = {this.state.formErrors.surname}
          />
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
            type="password"
            label="Подтвердить пароль"
            inputName="confirmPass"
            placeholder=""
            description="Повторите введенный выше пароль для подтверждения."
            req="required"
            handleInputChange={this.handleInputChange}
            value={confirmPass}
            noValid = {this.state.formErrors.confirmPass}
          />
          <InputInModal
            type="checkbox"
            label="Я согласен с политикой о конфиденциальности"
            inputName="policy"
            placeholder=""
            description=""
            req="required"
            handleInputChange={this.handleInputChange}
            noValid = {this.state.formErrors.policy}
            checked = {policy}
          />
          <a href="#" className="policyLink">
            Политика конфиденциальности
          </a>
          <div className="error-message" id="registration-error-message">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <Button
            text="Регистрация"
            type="submit"
            name="submitRegistration"
            onClick={this.registration}
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
      </ModalWindow>
    );
  }
}

export default Registration;
