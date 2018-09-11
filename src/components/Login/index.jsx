import React from 'react';


const Login = ({checked, handleRememberMe, loginSend}) => {



    return (
        <form method="post" className="a-entrance">
            <h2 className="title a-entrance__title">[ вход _]</h2>
            <div className="a-input-block a-entrance__input-block--first">
                <label className="a-input-block__label" htmlFor="email">Email</label>
                <input className="a-input-block__input" type="email" name="email" id="email" />
            </div>
            <div className="a-input-block a-entrance__input-block">
                <label className="a-input-block__label" htmlFor="pass">Пароль</label>
                <input className="a-input-block__input" type="password" name="pass" id="pass"/>
            </div>
            <div className="a-checkbox-block">
                <input className="a-checkbox-block__checkbox" id="remember-pass" type="checkbox" onChange={handleRememberMe} name="" value=""
                       checked={checked} />
                    <label className="a-checkbox-block__label">Запомнить пароль</label>
            </div>
            <p className="a-error a-entrance__error">Вы ввели неверный пароль/ник</p>
            <a className="a-entrance__forgot-pass" href="#">Забыли пароль? Мы напомним!</a>
            <div className="a-social a-entrance__social">
                <a className="a-social__link" href="#"><i className="icon icon--facebook"></i></a>
                <a className="a-social__link" href="#"><i className="icon icon--google"></i></a>
                <a className="a-social__link" href="#"><i className="icon icon--linkedin"></i></a>
            </div>
            <button className="button-big a-entrance__btn" type="submit" name="button" onClick={evt => {
        evt.preventDefault();
        

    }} >ВОЙТИ</button>
        </form>
    )
};

export default Login
