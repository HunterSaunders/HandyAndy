import { Link } from 'react-router-dom';
import './RentalCard.scss';
import EquipmentList from '../../lists/equipmentList'

const EquipmentRentalCard = () => { 

    return(
    <>

    {EquipmentList.map((item, index) => {
        return (
            <div className = 'rentalCardWrapper' key = {index}>

                <img src = {item.image} alt = 'truck' className = 'rentalCardImage' />

                <div className = 'rentalCardInfo'>

                    <h4 className = 'rentalCardTitle'>{item.title}</h4>

                    <p className = 'rentalCardDescription'>{item.description}</p>

                    <div className = 'rentalCardBasePrice'>

                        <p className = 'basePriceLine'>From: <span>${item.dayRate}</span>/Day</p>

                    </div>

                        <Link to = {{
                            pathname: '/equipment/{$exc}',
                            state: {
                                name: item.title,
                                img: item.image,
                                day: item.dayRate,
                                week: item.weekRate,
                                month: item.monthRate,
                                info: item.description,
                                specifications: item.specifications,
                                equipmentSimilar: item.similar,
                            }}} 
                        className = 'rentalCardBtn'>More Details</Link>
                </div>

                        
                        
            </div>
                
        )
    })}

    </>
    )
}

export default EquipmentRentalCard
