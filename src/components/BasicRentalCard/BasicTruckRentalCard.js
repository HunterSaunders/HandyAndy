import { Link } from 'react-router-dom';
import TruckList from '../../lists/trucksList';


const BasicTruckRentalCard = (props) => {

    const truckExtra = TruckList[props.truck];


    return (


        <div className = 'basicRentalCardWrapper' style = {{backgroundColor: '#000', display: 'flex', flexDirection: 'column', width: '100%'}}>
            <img src = {truckExtra.image} alt = 'Truck' className = 'basicRentalCardImg' style = {{maxWidth: '100%'}}/>


            <div className = 'basicRentalCardInfo' style = {{color: 'rgba(255,255,255,.75)', width: '100%', padding: '.5rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'flex-end'}}>
                {truckExtra.type}

                <Link to = {{
                    pathname: '/truck/{$1yd}',
                    state: {
                        name: truckExtra.title,
                        img: truckExtra.image,
                        day: truckExtra.dayRate,
                        week: truckExtra.weekRate,
                        month: truckExtra.monthRate,
                        info: truckExtra.description,
                        specifications: truckExtra.specifications,
                        trucksSimilar: truckExtra.similar,
                    }}} 
                    className = 'rentalCardBtn' style = {{backgroundColor: 'rgba(255,230,0,1)', padding: '0px 5px', color: '#000', textDecoration: 'none', borderRadius: '3px', fontSize: '15px'}}>More Details</Link>
            </div>
            
            <div className = 'basicRentalCardType' style = {{width: '100%', textAlign: 'left', padding: '0 .5rem .5rem .5rem', color: '#fff', fontSize: '20px'}}>
                {truckExtra.title}
            </div>

        </div>
    )
}

export default BasicTruckRentalCard
