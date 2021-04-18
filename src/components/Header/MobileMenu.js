import React, {useLayoutEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.scss';

const MobileMenu = ({closeMobileMenu}) => {
    
    useLayoutEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";
        return () => (document.body.style.overflow = originalStyle);
      }, []);

      const [subView , setSubView ] = useState(false);

      const handleMobileMenuDrop = () =>{
          if (subView === false){
              setSubView(true)
          }
          else{
              setSubView(false)
          }
      }
    
      return (
        <div className = 'mobileMenuWrapper'>
            <ul className = 'mobileMenuList'>
            <li className = 'mobileMenuItem' onClick = {closeMobileMenu}><Link to ='/'>Home</Link></li>
            <li className = 'mobileMenuItem' onClick = {handleMobileMenuDrop}>Services
            {subView ?
                <ul className = 'mobileMenuSubList'>
                    <li className = 'subMenuItem' onClick = {closeMobileMenu}><Link to ='/trucks'>Trucks</Link></li>
                    <li className = 'subMenuItem' onClick = {closeMobileMenu}><Link to ='/equipments'>Equipment</Link></li>
                    <li className = 'subMenuItem' onClick = {closeMobileMenu}><Link to ='/tools'>Tools & Propane</Link></li>
                    <li className = 'subMenuItem' onClick = {closeMobileMenu}><Link to ='/concrete'>Concrete</Link></li>
                </ul>
                : null
            }
            </li>
            <li className = 'mobileMenuItem' onClick = {closeMobileMenu}><Link to ='/resources'>Resources</Link></li>
            <li className = 'mobileMenuItem' onClick = {closeMobileMenu}><Link to ='/faq'>FAQ</Link></li>

            <li className = 'mobileMenuItem mobileBtn' onClick = {closeMobileMenu}><Link to ='/contact'>Contact</Link></li>

            </ul>
        </div>
    )
}

export default MobileMenu
