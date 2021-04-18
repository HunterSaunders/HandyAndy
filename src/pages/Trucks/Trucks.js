import TruckRentalCard from '../../components/RentalCard/TruckRentalCard'
import FilterBar from '../../components/FilterBar/FilterBar'
import RentalInfo from '../../components/SmallComponents/RentalInfo'
import './Trucks.scss'
import { useState } from 'react'

const Trucks = () => {

    const [truckType, setTruckType] = useState('');
    const [materialType, setMaterialType] = useState('');
    
    return (

        
        
        <div className = 'truckPageWrapper'>


            <div className = 'truckHeroSection'>
                <div className = 'truckHeroContainer'>
                    <div className = 'truckHeroInfo'>
                        <h1>Truck Inventory</h1>
                    </div>
                </div>
            </div>
        
            <div className = 'rentalInfoSection'>
                <div className = 'rentalInfoContainer'>
                    <RentalInfo />
                </div>
            </div>


            <div className = 'truckFilterBarContainer'>
                <FilterBar setTruckType = {setTruckType} setMaterialType = {setMaterialType} />
            </div>
            

            
            <div className = 'truckCardSection'>
                <TruckRentalCard truckType = {truckType} materialType = {materialType}/>
            </div>
        </div>
    )
}

export default Trucks
