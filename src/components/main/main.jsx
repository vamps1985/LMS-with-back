import React from 'react';
import './style.scss';
const MainPage = () => (
  <div className="wrapper">
  <div >
        <div className="container">
            <div className="header">
                <div className="logo">
                <img className="logo__img" src="img/logo.png" alt="LOGO"/>

                </div>
                <form className="" action="index.html" method="post">
                <button className="button-small" id="open_login" type="button" name="button">Log In</button>
                <button className="button-small" id="open_signin" type="button" name="button">Sign In</button>
                </form>
            </div>
        </div>
    </div>
    <div className="wrapper wrapper--light-gray">
        <div className="container">
            <div className="content">

                    // = html/entrance.html
                    // = html/registration.html
                    // = html/end-registration.html


            </div>
        </div>
    </div>
    </div >
);

export default MainPage;
