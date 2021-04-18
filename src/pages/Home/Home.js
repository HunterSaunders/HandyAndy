import './Home.scss'
import AboutImg from '../../components/images/about.jpg'
import TruckIcon from '../../components/images/truckIcon.png'
import EquipIcon from '../../components/images/equipIcon.png'
import ConcreteIcon from '../../components/images/concreteIcon.png'
import ToolIcon from '../../components/images/toolIcon.png'

import ContactForm from '../../components/ContactForm/ContactForm'
import TestimonialSlider from '../../components/TestimonialSlider/TestimonialSlider'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import QuickContact from '../../components/QuickContact/QuickContact'

const Home = () => {
    return (
        <div className = 'homeWrapper'>
            <div className = 'homeHeroSection'>
                <div className = 'homeHeroContainer'>
                    <div className = 'homeHeroInfo'>
                        <div style = {{height: '10px', width: '180px', backgroundColor: 'rgba(255,255,255,1)', marginBottom: '1rem'}} />
                        <h1>Seattles <span>Largest</span></h1>
                        <h1>Local Truck Rental Fleet</h1>
                    </div>
                </div>
            </div>
            <div className = 'homeDarkSection'>
                <div className = 'homeSectionContainer' style = {{ textAlign: 'center'}}>
                
                    <h3 style = {{color: 'rgba(255,230,0,1)'}}>Our Repsonse To Covid</h3>
                    
                    <p>Due to the increasing risk of the COVID-19 virus, we have implemented new policies to keep our customers and employees healthy.</p>
                    <p>We have increased the frequency of cleaning and disinfecting throughout our business and rental vehicles.</p>
                    <p>We have reduced contact in the office.</p>
                    <p>For all rentals, we will be waiving signature requirements on our electronic devices at our counter and instead conducting a verbal rental agreement.</p>
                    <p>Thank you,</p>
                    <p>The Handy Andy Team</p>

                </div>
            </div>

            <div className = 'homeLightSection'>
                <div className = 'homeSectionContainer'>
                    <h1>Our Services</h1>
                    <div className = 'servicesContainer'>
                        <ServiceCard 
                            icon = {TruckIcon}
                            title = 'Trucks'
                            text = 'We have a truck for any job. Whether it be for moving dirt, furniture, materials, etc.'
                            link = '/trucks'
                        />

                        <ServiceCard 
                            icon = {EquipIcon}
                            title = 'Excavators & Skidsteers'
                            text = 'Our excavatyors and skiddsteers are perfect for you to get your job done fast and right!'
                            link = '/equipments'
                        />

                        <ServiceCard 
                            icon = {ConcreteIcon}
                            title = 'U-Cart Concrete'
                            text = 'We have large array of hand tools, power tools, specialty tools, and much more!'
                            link = '/concrete'
                        />

                        <ServiceCard 
                            icon = {ToolIcon}
                            title = 'Tools & Propane'
                            text = 'We have large array of hand tools, power tools, specialty tools, and much more!'
                            link = '/tools'
                        />
                        
                    </div>
                </div>
            </div>

            <div className = 'homeDarkSection'>
                <div className = 'homeSectionContainer'>
                    <QuickContact />
                </div>
            </div>

            <div className = 'homeLightSection'>
                <div className = 'homeSectionContainer'>
                    <h1>About Us</h1>
                    <div className = 'aboutContent'>
                        <div className = 'aboutText'>
                            <p>
                            For more than 40 years Handy Andy Rent-A-Tool 
                            has been assisting the communities of the greater 
                            Seattle area. We are a proud multigeneration working 
                            family owned business. From growing out of a small tool 
                            rental shop into the largest locally owned truck rental 
                            fleet. We have continued to keep the family friendly feel 
                            from the beginning.
                            </p>
                            <p>
                            As a family owned business we have been able to build strong individual relationships with many of our 
                            customers and assist them in provinding them with the equipment they need for their personal projects, businesses, and much more.
                            </p>
                            <p>
                            Come by the office to meet us or call us for your next project. 
                            We strive to provide a friendly and fast paced service on your behalf. 
                            </p>
                        </div>

                        <img src = {AboutImg} alt = 'About' className= 'aboutImage'/>
                    </div>
                </div>
            </div>

            <div className = 'homeDarkSection'>
                <div className = 'homeSectionContainer'>
                    <TestimonialSlider />
                </div>
            </div>

            <div className = 'homeLightSection'>
                <div className = 'homeSectionContainer'>

                    <ContactForm 
                    headerText = 'Contact Us'/>

                </div>
            </div>
        </div>
    )
}

export default Home
