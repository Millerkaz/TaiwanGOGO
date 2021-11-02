import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from './headerNav/headerNav';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/" className="header__logo">
          ラミはどこだ？
        </Link>
        <HeaderNav className="header__navBar" />
      </header>
    );
  }
}

export default Header;
