import './Contact.scss'
import Map from '../../components/images/map.png'
import ContactForm from '../../components/ContactForm/ContactForm'


const Contact = () => {



    return (
        <div className = 'contactWrapper'>
            <div className= 'contactContainer'>
                <div className = 'contactInfo'>
                    
                    <h1 className = 'contactHeader'>COME BY</h1>
                    
                    <div className = 'contactGeneralInfo'>
                        <div>
                            <h4>Address</h4>
                            <p>10711 Aurora Ave N</p>
                            <p>Seattle, WA 98133</p>
                        </div>
                        <div>                    
                            <h4>Office Hours</h4>
                            <p>Monday-Saturday: 8am-6pm</p>
                            <p>Sunday: Closed</p>
                        </div>
                        <div>                    
                            <h4>Phone</h4>
                            <p>+1(206) 367-5050</p>
                        </div>
                        <div>                    
                            <h4>Email</h4>
                            <p>handyandyrentatool@aol.com</p>
                        </div>
                    </div>

                    <div className = 'mapSection'>
                        <a href = 'https://www.google.com/maps/place/Handy+Andy+Rent-A-Tool/@47.7071605,-122.3474018,17z/data=!3m1!4b1!4m5!3m4!1s0x549016addfb54629:0xe675d953799d25cf!8m2!3d47.7071605!4d-122.3452131'>
                            <img src = {Map} alt = 'Map' />
                        </a>
                    </div>

                </div>

                <ContactForm 
                    headerText = 'HOW CAN WE HELP?'
                />

            </div>
        </div>
    )
}

export default Contact
