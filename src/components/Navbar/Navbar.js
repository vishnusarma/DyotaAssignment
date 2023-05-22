import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsMobile(false);
  };

  return (
    <nav className='navbar'>
      <h3 className='logo'>DYOTA</h3>
      <ul className={isMobile ? 'links-mobile-view' : 'links'}>
        <li className={location.pathname === '/' ? 'active' : ''} onClick={handleLinkClick}>
          <Link to='/'>Home</Link>
        </li>

        <li className={location.pathname === '/about' ? 'active' : ''} onClick={handleLinkClick}>
          <Link to='/about'>About</Link>
        </li>

        <li className={location.pathname === '/services' ? 'active' : ''} onClick={handleLinkClick}>
          <Link to='/services'>Services</Link>
        </li>

        <li className={location.pathname === '/contact' ? 'active' : ''} onClick={handleLinkClick}>
          <Link to='/contact'>Contact Us</Link>
        </li>

        <li className={location.pathname === '/signup' ? 'active' : ''} onClick={handleLinkClick}>
          <Link to='/signup'>SignUp</Link>
        </li>

        <li className={location.pathname === '/chat' ? 'active' : ''} onClick={handleLinkClick}>
          <Link to="/chat">Chat</Link>
        </li>
      </ul>
      <button className='mobile-view' onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className='fas fa-times'></i> : <i className='fa fa-bars'></i>}
      </button>
    </nav>
  );
};

export default Navbar;
