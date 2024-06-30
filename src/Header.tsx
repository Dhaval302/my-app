import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme', !isDarkTheme);
  };

  return (
    <header className="Header">
      <nav className="Header-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <button className="theme-switcher" onClick={toggleTheme}>
        {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
      </button>
    </header>
  );
};

export default Header;
