import React from 'react';
import Logo from '@/components/Common/Header/Logo';
import NavBar from '@/components/Common/Header/NavBar';
import NavBarNotification from '@/components/Common/Header/NavBarNotification';
import HeaderProfile from '@/components/Common/Header/HeaderProfile';
import PhotoProfile from '@/components/Common/Header/PhotoProfile';
import ProfileBlock from '@/components/Common/Header/ProfileBlock';
import HeaderProfileWindow from '@/components/Common/Header/HeaderProfileWindow';
import Button from '@/components/Common/Button';
import './styles.scss';

export default class Header extends React.Component {
  render() {
    const { isLogin, showModal } = this.props;
    return (
      <div className="Wrapper">
        <div className="Container">
        { isLogin ?
          <header className="HeaderCommon">
            <Logo />
              <NavBar>
                {/* <NavBarNotification /> */}
              </NavBar>
              <HeaderProfile>  
                <PhotoProfile />
                <ProfileBlock myProfile={'my profile'} signOut={'sign out'}/>
                {/* <HeaderProfileWindow /> */}
              </HeaderProfile>
          </header>
          : 
          <header className="HeaderCommon">
          <Button
            type="button"
            text="Log In"
            name="login"
            onClick={ showModal }
            cls="button-small"
          />
          <Button
            type="button"
            text="Sign In"
            name="registration"
            onClick={ showModal }
            cls="button-small"
          />
        </header> }
          
        </div>
      </div>
    );
  }
}


// const NavNoLogin = ({openModal}) => (
//   <div>
//       <form className="" action="index.html" method="post">
//           <button className="button-small" id="open_login" type="button" name="login" onClick={openModal}>Log In
//           </button>
//           <button className="button-small" id="open_signin" onClick={openModal} type="button"
//                   name="registration">Sign In
//           </button>
//       </form>
//   </div>
// );

// const Navigation = ({isLogin, showModal}) =>
//   isLogin ? <NavIsLogin/> : <NavNoLogin openModal={showModal} /> ;


/* <div className="wrapper">
<div className="container">
  <div className="header">
    <a href="#" className="c-logo">
      <div className="c-logo__elem c-logo__elem-white">go</div>
      <div className="c-logo__elem c-logo__elem-orange">it</div>
    </a>
    <div className="c-header__nav-bar">
      {items.map(item => (
        <NavLink
          key={item.module}
          exact
          className="c-header__icon"
          to={item.link}
        >
          <div className={`c-header__icon c-header__icon-${item.module}`}>
            <span className="c-header__tooltip">1</span>
          </div>
        </NavLink>
      ))}
    </div>
    <NavLink
      exact
      className="c-header__photo-profile"
      to={'/'}
    >
      <div className="c-header__photo-profile-circle"></div>
      <div className="c-header__photo-profile-semicircle"></div>
    </NavLink>
  </div>
</div>
</div> */