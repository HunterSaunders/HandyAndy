import './Footer.scss'
import logo from '../images/handyandylogo.png'
import  { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className = 'footerWrapper'>
            <div className = 'footerContainer'>

                <div className = 'footerColumn footerAbout'>
                    <img src = {logo} alt = 'Logo' className = 'footerLogo' />
                    <p style = {{ fontSize: '14px'}}>Handy Andy Rent-A-Tool has been serving the greater Seattle area for over 40 years. If you have something that requires specialized tools, eqipment, or trucks give us a call and we can help you out.</p>
                    <p>Copyright © 2021 – Handy Andy Rent-A-Tool</p>
                </div>

                <div className = 'footerColumn'>
                    <h3>Site Navigation</h3>
                    <ul className = 'footerSiteNav'>
                        <li><Link to = '/'>Home</Link></li>
                        <li><Link to = '/trucks'>Trucks</Link></li>
                        <li><Link to = '/equipment'>Equipment</Link></li>
                        <li><Link to = '/concrete'>Concrete & Tools</Link></li>
                        <li><Link to = '/resources'>Resources</Link></li>
                        <li><Link to = '/faq'>FAQ</Link></li>
                        <li><Link to = '/contact'>Contact Us</Link></li>
                    </ul>
                </div>

                <div className = 'footerColumn'>
                    <h3>Contact Us</h3>
                    <ul className = 'footerContactInfo'>
                        <li>
                        <p className = 'subHeader'>Address:</p>
                        <p className = 'subText'>10711 Aurora Ave N</p>
                        <p className = 'subText'>Seattle, WA 98133</p>
                        </li>

                        <li>
                        <p className = 'subHeader'>Office Hours:</p>
                        <p className = 'subText'>Monday - Saturday: 8am - 6pm</p>
                        <p className = 'subText'>Sunday: Closed</p>
                        </li>

                        <li>
                        <p className = 'subHeader'>Phone:</p>
                        <p className = 'subText'>+1(206) 367-5050</p>
                        </li>

                        <li>
                        <p className = 'subHeader'>Email:</p>
                        <p className = 'subText'>handyandyrentatool@aol.com</p>
                        </li>

                        
                    </ul>
                </div>

            </div>
        </footer>
    )
}

export default Footer
