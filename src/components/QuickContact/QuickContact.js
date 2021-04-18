import './QuickContact.scss'

const QuickContact = () => {
    return (
        <div className = 'quickContactContainer'>
            <div className = 'quickContactItem'>
                <i class="fas fa-phone"></i>
                <div className = 'quickContactInfo'>
                    <p className = 'infoFaded'>Call Us</p>
                    <p className = 'infoBold'>+1 (206) 367-5050</p>
                </div>
            </div>

            <div className = 'quickContactItem'>
                <i class="fas fa-clock"></i>
                <div className = 'quickContactInfo'>
                    <p className = 'infoFaded'>Closed Sunday</p>
                    <p className = 'infoBold'>Mon-Fri 8am-6pm</p>
                </div>
            </div>

            <div className = 'quickContactItem lastItem'>
                <i class="fas fa-map-marker-alt"></i>
                <div className = 'quickContactInfo'>
                    <p className = 'infoFaded'>10711 Aurora Ave N</p>
                    <p className = 'infoBold'>Seattle, WA 98113</p>
                </div>
            </div>
        </div>
    )
}

export default QuickContact
