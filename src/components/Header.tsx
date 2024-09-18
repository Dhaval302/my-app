import { faMoon, faShoppingCart, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import CartModal from './CartModal';

interface HeaderProps {
  totalQuantity: number;
  onAddTile: () => void;
}

const Header: React.FC<HeaderProps> = ({ totalQuantity, onAddTile }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartButtonClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  return (
    <header className="Header shadow-md py-4 flex justify-between">
      <div className="container mx-auto items-center p-1 border-b-2 border-gray-200 text-bold">
        {/* Left Section: Logo Image */}
        <div className="mr-8">
          <Link to="/">
            <img src="/UrbanNest_transparent.png" alt="Logo" className="h-10" /> {/* Adjust the path and size as needed */}
          </Link>
        </div>

        <nav className="flex space-x-4">
          <Link
            to="/"
            className="hover:bg-gray-700 hover:text-white px-4 py-2 rounded transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:bg-gray-700 px-4 py-2 hover:text-white rounded transition-all duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:bg-gray-700 hover:text-white px-4 py-2 rounded transition-all duration-300"
          >
            Contact Us      
          </Link>
        </nav>

        <div className="flex items-center space-x-8">
          
          {/* <div className="relative cart-container padding-left-10">
            <FontAwesomeIcon
              icon={faShoppingCart}
              size="1x"
              onClick={handleCartButtonClick}
              className="cursor-pointer text-xl"
            />
            {totalQuantity > 0 && (
              <span className="absolute -top-4 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {totalQuantity}
              </span>
            )}
            {isCartOpen && <CartModal onClose={handleCloseCart} />}
          </div> */}
        </div>
      </div>
      <div className='flex-1'>
        <div className='flex justify-between'>
          <div className="relative cart-container  flex-1">
            <FontAwesomeIcon
              icon={faShoppingCart}
              size="1x"
              onClick={handleCartButtonClick}
              className="cursor-pointer text-xl"
            />
            {totalQuantity > 0 && (
              <span className="absolute -top-4 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {totalQuantity}
              </span>
            )}
            {isCartOpen && <CartModal onClose={handleCloseCart} />}
          </div>
          <div>
            <p className='text-xs'>Wallet: $1000</p>
          </div>
        </div>
          
          
      </div>
    </header>
  );
};

export default Header;
