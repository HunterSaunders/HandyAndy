import './Concrete.scss';
import SquareCalculator from '../../components/ConcreteCalculators/SquareCalculator/SquareCalculator';
import CylinderCalculator from '../../components/ConcreteCalculators/CylinderCalculator/CylinderCalculator';
import StepCalculator from '../../components/ConcreteCalculators/StepCalculator/StepCalculator';

import ConcreteData from '../../lists/concrete.json';
import Concrete1 from '../../components/images/concrete/conctrlr1.png';
import Concrete2 from '../../components/images/concrete/conctrlr2.png';
import Concrete3 from '../../components/images/concrete/conctrlr3.png';
import Concrete4 from '../../components/images/concrete/conctrlr4.png';

const Concrete = () => {
    return (
        <div className = 'concreteWrapper'>

            <div className = 'concreteHeroSection'>
                <div className = 'concreteHeroContainer'>
                    <div className = 'concreteHeroInfo'>
                        <h1>Concrete</h1>
                    </div>
                </div>
            </div>


            <div className = 'concreteMainSection'>
                <div className = 'concreteMainSectionContainer'>
                    <p className = 'concreteParagraph'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.                    
                    </p>
                </div>
            </div>

            <div className = 'concreteContainer'>

                <div className = 'concreteHours'>
                    <h4>CONCRETE MIXING HOURS: MONDAY - SATURDAY 9AM - 2PM</h4>
                </div>
                
                <div className = 'concretePoliciesPrice'>
                    <div className = 'policies-price'>
                        <div className = 'imagesTableSection'>
                            <div className = 'concreteImageGrid'>

                                <img src = {Concrete4} alt = 'Concrete Trailer' />
                                <img src = {Concrete3} alt = 'Concrete Trailer' />
                                <img src = {Concrete2} alt = 'Concrete Trailer' />
                                <img src = {Concrete1} alt = 'Concrete Trailer' />
                                
                            </div>

                            <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                <h3 className = 'policiesPricingHeader'>Pricing</h3>

                                <table className = 'priceTable'>
                                    <tr>
                                        <th>Cubic Yards</th>
                                        <th>Cubic Feet</th>
                                        <th style = {{ textAlign: 'right'}}>Price</th>
                                    </tr>

                                    {ConcreteData.map((item) =>{
                                        return(
                                            <tr>
                                            <td> {item.yard}</td> 
                                            <td> {item.feet}</td> 
                                            <td style = {{ textAlign: 'right'}}> {item.price}</td> 
                                            </tr>
                                    )})}
                                </table>
                            </div>
                        </div>
                    </div>





                    <div className = 'policies-price'>
                        <div className = 'policyInfoSections'>
                            <div>
                                <h3 className = 'policiesPricingHeader'>U-Cart Warnings & Policies</h3>
                                                                                                        
                                <p className = 'policylinegeneral'>You <span className = 'bold underline'>CANNOT</span> disconnect the trailer.</p>
                                <p className = 'policylinegeneral'>Two hours on the cart is include per load. Overtime is $15 an hour</p>
                                <p className = 'policylinegeneral'>We <span className = 'bold underline'>DO NOT</span> take any concrete back</p>
                                <p className = 'policylinegeneral'>Trailer must be returned clean and washed out. Washout fee is $10 minimum.</p>
                                <p className = 'policylinegeneral'>We are not responsible for damaged concrete due to weather. Concrete cures slowly under 45°F. Concrete sets rapidly in hot weather. Keep moist.</p>
                                <p className = 'policylinegeneral'><span className = 'bold'>KEEP HANDS, BODY PARTS AND FEET CLEAR OF TRAILER WHILE JACKING UP OR DOWN TO AVOID POSSIBLE INJURY OR DEATH.</span></p>
                                
                                <h4 className = 'policiesSection'>Portland Cement (CAS #65997-15-1)</h4>
                                <p className = 'policylinegeneral'>Portland Cement is non-hazardous when dry. When in contact with moisture (such as in eyes or on skin) or when mixed with water to make concrete, mortar or grout it becomes <span className = 'bold underline'>HIGHLY CAUSTIC AND WILL BURN (AS SEVERELY AS THIRD-DEGREE) THE EYES OR SKIN.</span> Inhalation of dry Portland Cement can irritate the upper respiratory system.</p>
                            </div>
                            <div>
                                <h4 className = 'policiesSection'>Protection</h4>
                                <p className = 'policylinegeneral'><span className = 'bold'>Respiratory Protection:</span> Use a MSHA/NIOSH-Approved respirator in dusty environments.</p>
                                <p className = 'policylinegeneral'><span className = 'bold'>Eye Protection:</span> Use tight-fitting goggles in dusty environments or when working concrete construction.</p>
                                <p className = 'policylinegeneral'><span className = 'bold'>Skin Protection:</span> Use barrier creams, impervious abrasion- and alkali- resistant gloves, boots and protective clothing to protect the skin from prolonged contact with wet cement in plastic concrete, mortar or grout. Immediately after working with cement or cement containing materials, wash with soap and water. Precautions must be taken. A cement burn occurs with very little warning as little heat is sensed by the skin.</p>

                                <h4 className = 'policiesSection'>First Aid</h4>
                                <p className = 'policylinegeneral'><span className = 'bold'>Eyes:</span> Flush eyes immediately and repeatedly with water and get <span className = 'underline'>prompt</span> medical attention.</p>
                                <p className = 'policylinegeneral'><span className = 'bold'>Skin:</span> Wash exposed skin areas with soap and water. If irritation or inflammation starts, seek <span className = 'underline'>prompt</span> medical attention.</p>

                                <h4 className = 'policiesSection'>Spills</h4>
                                <p className = 'policylinegeneral'>If Portland Cement powder is spilled, use dry cleanup methods that do not disperse the dust into the air. Avoid breathing dust. Emergency procedures not required. Material can be used if not contaminated. The label conforms with ANSI Z129.1-1988 for hazardous industrial chemicals, and OSHA Hazard Communication Standard CFR1919.1200</p>
                            </div> 
                        </div>
                    </div>
                </div>






                <div className = 'concreteCalculatorSection'>
                    <SquareCalculator />
                    <CylinderCalculator />
                    {/* <StepCalculator /> */}
                 
                </div>
            </div>
        </div>
    )
}

export default Concrete
