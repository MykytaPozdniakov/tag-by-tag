import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

const Header = ({ links }) => {
  const auth = useAuth();

  return (
    <header className="header">
      <nav className="menu">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.url}>{link.name}</Link>
            </li>
          ))}
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
