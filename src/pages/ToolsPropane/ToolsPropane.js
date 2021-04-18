import './ToolsPropane.scss'

import Tool from '../../components/images/tool.jpg'
import Propane from '../../components/images/propane.jpg'
import { Link } from 'react-router-dom'

const Trucks = () => {
    return (

        
        
        <div className = 'toolsPageWrapper'>


        <div className = 'toolsHeroSection'>
            <div className = 'toolsHeroContainer'>
                <div className = 'toolsHeroInfo'>
                    <h1>Tools & Propane</h1>
                </div>
            </div>
        </div>
    
        <div className = 'toolsRentalInfoSection'>
            <div className = 'toolsRentalInfoContainer'>
                <h2 style = {{color: 'rgba(255,230,0,1)', letterSpacing: '2px', fontSize: '28px', fontWeight: 'normal'}}>Tool Rental Period</h2>
                <p style = {{color: '#fff', fontWeight: 'normal', fontSize: '13px',textAlign: 'justify'}}>All tools are a 24 hour rental beginning from the time they are picked up. If a tool is picked up in the morning on saturday it is due back by closing (6pm) for the one day rental price. If the tool is picked up after 3pm on Saturday it is due back between 8am and 10pm on moday for the one day price.   </p>
            </div>
        </div>


        <div className = 'toolsContainer'>

            <div className = 'toolsInfo' style = {{justifyContent: 'space-between'}}>
                <p>We carry a large variety of all types of tools. If you need then we probably have it. We carry standard tradition hand tools, power tools, and even a large selection of specialty tools for all your needs. If you are looking for something special give us a call as we can help you out. For any questions on pricing and availability give us a call at <span>+1(206)367-5050</span> or contact us below.</p>

                
                <Link to = '/contact' className = 'toolsContact'>Contact Us</Link>
                
            </div>

            <div className = 'toolsInfoList' >
                <p>We carry a large variety of tools both small & large</p>
                <div className = 'toolsList'>
                    <ul>
                        <li>Scaffolding</li>
                        <li>Jack Hammers</li>
                        <li>Aerators</li>
                        <li>Rototillers</li>
                        <li>Pressure Washers</li>
                        <li>Sanders</li>
                        <li>Heaters</li>
                        <li>Fans</li>
                    </ul>

                    <ul>
                        <li>Saws</li>
                        <li>Trailers</li>
                        <li>Concrete Tools</li>
                        <li>Garden Tools</li>
                        <li>Drain Snakes</li>
                        <li>Power Tools</li>
                        <li>Hand Tools</li>
                        <li>& Much More!</li>
                    </ul>

                </div>

            </div>
            
            
            <div className = 'toolsIconContainer'>
                <img src = {Tool} alt = 'Tools Icon' />
            </div>
        
        </div>

        <div className = 'toolsRentalInfoSection'>
            <div className = 'toolsRentalInfoContainer'>
                <h2 style = {{color: 'rgba(255,230,0,1)', letterSpacing: '2px', fontSize: '28px', fontWeight: 'normal'}}>Propane Tanks</h2>
                <p style = {{color: '#fff', fontWeight: 'normal', fontSize: '13px',textAlign: 'justify'}}>All propane refills must be within the certfied date stamped on the tank. If a propane tank is heavely damaged, rusted, or not clearly mark as certified we will not be able to refill it. Please check and confirm that your propane tanks are in condition to be filled both for our safety and yours.</p>
            </div>
        </div>


        <div className = 'propaneContainer'>
            
            <div className = 'propaneIconContainer'>
                <img src = {Propane} alt = 'Propane Icon' />
            </div>

            <div className = 'propaneInfo'>
                <p>Refilling your propane tanks here at Handy Andy Rent-A-Tool is the fastest and cheapest option. Come on in and we will have someone fill your tanks right away. No Extra service fees or any other hidden costs. Pay for only the fuel put into your tank.</p>
                <ul>
                    <li>Propane Sold by the Gallon</li>
                    <li>No Additional Charges or Fees</li>
                    <li>Filling Monday-Saturday 9am - 6pm</li>
                    <li>Will Fill small tanks, large tanks, and RV's</li>
                </ul>

            </div>
            <div className = 'propanePricing'>
                <h2>Propane Pricing</h2>

                <ul className = 'propanePriceList'>
                    <li><h5>Less than 10 gallons: $2.90/ gallon</h5></li>
                    <li><h5>More than 10 gallons: $2.75/ gallon</h5></li>
                </ul>

            </div>

        </div>


        </div>
    )
}

export default Trucks
