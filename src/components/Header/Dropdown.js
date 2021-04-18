import React, { useState } from 'react';

import './Dropdown.scss';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const MenuItems = [
    {title: 'Trucks', path: '/trucks', cName: 'dropdown-link'},
    {title: 'Equipment', path: '/equipments', cName: 'dropdown-link'},
    {title: 'Tools & Propane', path: '/tools', cName: 'dropdown-link'},
    {title: 'Concrete', path: '/concrete', cName: 'dropdown-link'},
  ];

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;