import EquipmentRentalCard from '../../components/RentalCard/EquipmentRentalCard'
import RentalInfo from '../../components/SmallComponents/RentalInfo'
import './Equipment.scss'

const Equipment = () => {
    return (

        
        
        <div className = 'equipmentPageWrapper'>


            <div className = 'equipmentHeroSection'>
                <div className = 'equipmentHeroContainer'>
                    <div className = 'equipmentHeroInfo'>
                        <h1>Equipment Inventory</h1>
                    </div>
                </div>
            </div>
        
            <div className = 'rentalInfoSection'>
                <div className = 'rentalInfoContainer'>
                    <RentalInfo />
                </div>
            </div>

            <div className = 'equipmentCardSection'>
                <EquipmentRentalCard />
            </div>
        </div>
    )
}

export default Equipment
