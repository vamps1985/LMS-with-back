import React from 'react';

const MainPage = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="container">
                    <div className="header">
                        <div className="logo">
                            <img className="logo__img" src="img/logo.png" alt="LOGO"/>
                        </div>
                        <form className="" action="index.html" method="post">
                            <button className="button-small" id="open_login" type="button" name="button">Log In</button>
                            <button className="button-small" id="open_signin" type="button" name="button">Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="wrapper wrapper--light-gray">
                <div className="container">
                    <div className="content">



                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
