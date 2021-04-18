import { Link } from 'react-router-dom'
import './ServiceCard.scss'

const ServiceCard = (props) => {
    return (
        <div className = 'serviceCardContainer'>
            <div className = 'serviceCardImgContainer'>
                <img src = {props.icon} alt = 'Icon' />
                <div>
                    <Link to = {props.link} className = 'cardBtn'>See More</Link>
                </div>
            </div>
            <div className = 'cardInfo'>
                <h2 className = 'cardTitle'>{props.title}</h2>
                <p className = 'cardText'> {props.text}</p>
                
            </div>
        </div>
    )
}

export default ServiceCard
