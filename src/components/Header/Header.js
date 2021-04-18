import React, { useState , useLayoutEffect } from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import Dropdown from './Dropdown';
import Logo from '../images/handyandylogo.png'
import MobileMenu from './MobileMenu';

const Header = () => {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  }; 


  return (
    <div className = 'headerWrapper'>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src = {Logo} alt = 'Logo' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        
          {click ?
          
          
          <div className = 'mobileMenu'>
          <MobileMenu closeMobileMenu = {closeMobileMenu} /> 

          </div>
          
          
          
          
          : 
          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
          <li className='nav-item'>
            <a href='/' className='nav-links nav-links-main' onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li
            className='nav-item nav-links-main'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <div
              className='nav-links'
              onClick={closeMobileMenu}
              style = {{cursor: 'pointer'}}>

              Services 
              
              <i className='fas fa-caret-down' style = {{fontSize: '12px', marginLeft: '.5rem'}} />
            
            </div>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <a
              href='/resources'
              className='nav-links nav-links-main'
              onClick={closeMobileMenu}
            >
              Resources
            </a>
          </li>

          <li className='nav-item'>
            <a
              href='/faq'
              className='nav-links nav-links-main'
              onClick={closeMobileMenu}
            >
              FAQ
            </a>
          </li>

          <li className='nav-item'>
            <a
              href='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
              style = {{backgroundColor: 'rgba(255,230,0,1)', color: '#000', borderRadius: '4px'}}
            >
              Contact Us
            </a>
          </li>
  
        </ul>
          
          }
        


    



        
        
      </nav>
    </div>
  );
}

export default Header;