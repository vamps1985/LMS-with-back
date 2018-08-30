import React from 'react';
import '../Landing/modal-window.scss';
import '../Landing/_registration.scss';
import '../Landing/_entrance.scss';

const Registration = ({handleInputChange, closeModal}) => {


    return (
        <div className="wrapper__modal-window" id="modal_registration">
            <div className="modal-window">
                <button className="close modal-window__close" name="registration" onClick={closeModal} id="close_registration">&#10005;</button>
                <form method="#" className="a-entrance a-entrance--centered">
                    <h2 className="title a-entrance__title">[ регистрация _ ]</h2>
                    <div className="a-input-block a-entrance__input-block">
                        <label className="a-input-block__label a-input-block__label--rightaligned star"
                               htmlFor="name">Имя</label>
                        <div className="input-wrapper input-wrapper-name"
                             data-description="Введите свое имя с заглавной буквы.">
                            <input className="a-input-block__input  a-input-block__input--size" type="text" name="name"
                                   id="name" placeholder="Александр" onChange={handleInputChange} required/>
                        </div>
                    </div>
                    <div className="a-input-block a-entrance__input-block">
                        <label className="a-input-block__label a-input-block__label--rightaligned star"
                               htmlFor="surname">Фамилия</label>
                        <div className="input-wrapper  input-wrapper-surname"
                             data-description="Введите свою фамилию с заглавной буквы.">
                            <input className="a-input-block__input  a-input-block__input--size" type="text"
                                   name="surname" id="surname" placeholder="Разумовский" onChange={handleInputChange} required />
                        </div>
                    </div>
                    <div className="a-input-block a-entrance__input-block">
                        <label className="a-input-block__label a-input-block__label--rightaligned star"
                               htmlFor="new_email">Email</label>
                        <div className="input-wrapper input-wrapper-email" data-description="Введите свой e-mail.">
                            <input className="a-input-block__input  a-input-block__input--size" type="email"
                                   name="email" id="new_email" placeholder="Alex123@gmail.com" onChange={handleInputChange} required />
                        </div>
                    </div>
                    <div className="a-input-block a-entrance__input-block">
                        <label className="a-input-block__label a-input-block__label--rightaligned star"
                               htmlFor="pass">Пароль</label>
                        <div className="input-wrapper input-wrapper-pass"
                             data-description="Пароль должен быть не менее 5-ти символов без пробелов.">
                            <input className="a-input-block__input a-input-block__input--size" type="password"
                                   name="password"
                                   id="new_pass" required onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div className="a-input-block a-entrance__input-block">
                        <label className="a-input-block__label a-input-block__label--rightaligned" htmlFor="confpass">Подтвердить<span
                            className="star"/>
                            <br/>пароль<span className="correctpass">&#10003;</span></label>
                        <div className="input-wrapper input-wrapper-confpass"
                             data-description="Повторите введенный выше пароль для подтверждения.">
                            <input className="a-input-block__input a-input-block__input--size" type="password"
                                   name="confirmPass"
                                   id="confpass" onChange={handleInputChange} required/>
                        </div>
                    </div>
                    <div className="input-wrapper--error-message" id="error-message"></div>
                    <div className="a-checkbox-block">
                        <input className="a-checkbox-block__checkbox" id="policy" type="checkbox" name="policy"
                               required/>
                        <label className="a-checkbox-block__label "> <a href="#" className="policylink" required>Private
                            Policy</a></label>
                    </div>
                    <div className="a-social a-entrance__social">
                        <a className="a-social__link" href="#"><i className="icon icon--facebook"></i></a>
                        <a className="a-social__link" href="#"><i className="icon icon--google"></i></a>
                        <a className="a-social__link" href="#"><i className="icon icon--linkedin"></i></a>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Registration;
