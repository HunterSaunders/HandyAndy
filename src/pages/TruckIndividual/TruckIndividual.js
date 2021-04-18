import { useHistory } from 'react-router-dom';
import BasicTruckRentalCard from '../../components/BasicRentalCard/BasicTruckRentalCard';
import './TruckIndividual.scss';

const TruckIndividual = (props) => {


    const {name, img, day, week, month, mile, info, specifications, trucksSimilar} = props.location.state
    let historyPage = useHistory();
    
 
        return (

            
            <div className = 'truckIndividualPageWrapper'>
                <div className = 'truckIndividualPageContainerLight truckIndividualPageContainer'>
                    
                    <div className = 'truckIndividualPageNav'>
                        <button className = 'truckIndividualPageBackBtn' onClick = {() => historyPage.goBack()}>
                        <i class="fas fa-arrow-left" /> Back
                        </button>
                    </div>

                    <div className = 'truckIndividualPageContainerBlock'>
                        <div className = 'truckIndividualGrid'>

                            <img src = {img} alt = 'Truck' className = 'truckIndividualImg' />

                            <div className = 'truckIndividualBasicInfo'>
                                <div>
                                    <h2 className = 'truckName'>{name}</h2>

                                    <div className = 'truckIndividualBar' />
                                </div>

                                <p>{info}</p>

                                <div className = 'basePrice'>
                                    <h5>FROM:</h5>

                                    <p><span>${day}</span>/Day + <span>${mile}</span>/Mile</p>
                                </div>
                            </div>
                            
                            <div className = 'truckIndividualPricing'>
                                <h5>RENTAL RATES</h5>
                                <p className = 'rentalRateText'>Daily: ${day}/Time Period + ¢{mile}/Mile</p>
                                <p className = 'rentalRateText'>Weekly: ${week}/Week + ¢{mile}/Mile</p>
                                <p className = 'rentalRateText'>Monthly: ${month}/Month + ¢{mile}/Mile</p>
                            </div>

                            <div className = 'truckIndividualSpecifications'>
                                <h5>Specifications</h5>
                                <ul className = 'truckSpecificationsList'>
                                    
                                    {specifications.map((item, index) =>{
                                        return(
                                            <li key = {index}>{item.spec}</li>
                                    )})}

                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className = 'truckIndividualPageContainerDark truckIndividualPageContainer'>
                    <div className = 'truckIndividualPageContainerBlock'>
                        <h4 className = 'reservationTitle'>RESERVATIONS </h4>
                        <p className = 'reservationInfo'>
                        All reservations are to be made in person, over the phone, 
                        or by email with confirmation. Reservations run only in time 
                        periods. During the week the truck must be picked up between 
                        8am and 9am on the day or the rental unless otherwise requested. 
                        For a one day rate the truck will be due back by 8am the next 
                        morning regardless of the time the rental began.
                        </p>
                    </div>
                </div>


                <div className = 'truckIndividualPageContainerLight truckIndividualPageContainer'>
                    <div className = 'truckIndividualPageContainerBlock'>
                        <h4 className = 'additionalTrucksTitle'>Similar Trucks</h4>
                        <div className ='additionalTrucksBar' />

                        <div className = 'additionalTrucksGrid'>
                            {trucksSimilar.map ((item, index) => {
                                return(
                                    <BasicTruckRentalCard truck = {item.truck} key = {index}/>
                                )
                            })}

                        </div>

                    </div>
                </div>
            </div>
        )
    
}

export default TruckIndividual
