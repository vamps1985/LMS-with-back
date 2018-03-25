import React from 'react';
import './styles.scss';

const Header = () => (
  <div className="Header">
    <h1 className="Header__title">[ Что нового? _]</h1>
    <div className="Header__last-news">
      <h3 className="Header__text">[ Последние новости: ]</h3>
      <div className="icon-add" />
    </div>
  </div>
);

export default Header;
