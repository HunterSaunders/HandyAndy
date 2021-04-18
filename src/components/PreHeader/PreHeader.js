import './PreHeader.scss'

const PreHeader = () => {
    return (
        <div className = 'aboveHeaderWrapper'>
            <div className = 'aboveHeader'>
                <ul className = 'navContainer' style = {{marginLeft: '0'}}>
                    <div className = 'aboveHeaderConactInfo'>
                        <li>Phone: +1 (206) 367-5050 </li>
                        <li>Email: handyandyrentatool@aol.com</li>
                    </div>
                </ul>

                <ul className = 'navContainer'>
                    <div className = 'aboveHeaderLinks'>
                        <li><a href = 'https://www.facebook.com/Handy-Andy-Rent-A-Tool-104162339649739/' target="_blank"><i className="fab fa-facebook"></i></a></li>
                        <li><a href = 'https://www.yelp.com/biz/handy-andy-rent-a-tool-seattle-2' target="_blank"><i className="fab fa-yelp"></i></a></li>
                        <li><a href = 'https://www.google.com/maps/place/Handy+Andy+Rent-A-Tool/@47.7071641,-122.3474071,17z/data=!3m1!4b1!4m5!3m4!1s0x549016addfb54629:0xe675d953799d25cf!8m2!3d47.7071605!4d-122.3452132' target="_blank"><i className="fas fa-map-marker-alt"></i></a></li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default PreHeader
