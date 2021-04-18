import { Link } from 'react-router-dom';
import './RentalCard.scss';
import TruckList from '../../lists/trucksList';
import filterList from '../FilterBar/filterList';

const RentalCard = (props) => { 

    console.log(props.truckType , props.materialType)

    return(
    <>

    {TruckList.map((item, index) => {
        if (item.filterType.includes(props.truckType) && item.filterMaterial.includes(props.materialType)){
        return (
            <div className = 'rentalCardWrapper' key = {index}>

                <img src = {item.image} alt = 'truck' className = 'rentalCardImage' />

                <div className = 'rentalCardInfo'>

                    <h4 className = 'rentalCardTitle'>{item.title}</h4>

                    <p className = 'rentalCardDescription'>{item.description}</p>

                    <div className = 'rentalCardBasePrice'>

                        {/* <p className = 'basePriceTitle'>From:</p> */}
                        <p className = 'basePriceLine'>From: <span>${item.dayRate}</span>/Day + <span>${item.mileRate}</span>/mile</p>

                    </div>

                        <Link to = {{
                            pathname: '/truck/{$3yd}',
                            state: {
                                name: item.title,
                                img: item.image,
                                day: item.dayRate,
                                week: item.weekRate,
                                month: item.monthRate,
                                mile: item.mileRate,
                                info: item.description,
                                specifications: item.specifications,
                                trucksSimilar: item.similar,
                            }}} 
                        className = 'rentalCardBtn'>More Details</Link>
                </div>

                        
                        
            </div>
                
        )
}})}

    </>
    )
}

export default RentalCard
