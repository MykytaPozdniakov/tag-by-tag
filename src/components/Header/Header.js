// Header.js

import React from 'react';
import './Header.css'; // Импортируйте ваш файл стилей
import GoogleSignInButton from './../GoogleSignInButton';
import { useAuth } from '../../AuthContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const auth = useAuth();

  return (
    <header className="header">
      {/* Ваши другие элементы */}
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          {/* Добавьте другие ссылки для навигации */}
        </ul>
      </nav>
      {auth.isAuthenticated() ? (
        <div className="user-dropdown">
          <div className="user-name">{auth.user.name}</div>
          <div className="user-menu">
            <a href="/options">Options</a>
            <button onClick={() => auth.logout()}>Logout</button>
          </div>
        </div>
      ) : (
        <Link to="/signin">Sign in</Link>
      )}
    </header>
  );
};

export default Header;