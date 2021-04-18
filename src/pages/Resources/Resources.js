import React, { useState } from 'react'
import './Resources.scss'
import PrivacyPolicy from '../../components/LegalDoc/PrivacyPolicy';
import TermsOfUse from '../../components/LegalDoc/TermsOfUse';

const Resources = () => {

    const [terms, setTerms] = useState(false)
    const [privacy, setPrivacy] = useState(false)

    const handleTerms = () => {
        setTerms(true);
        setPrivacy(false);
    }

    const handlePrivacy = () => {
        setPrivacy(true);
        setTerms(false);
    }



    return (
        <div className = 'resourcesWrapper'>

            <div className = 'resourcesContainer'>

                <div className = 'downloadsGrid'>

                    <div className = 'downloadCard'>
                        <h1>DOWNLOADS</h1>
                        <ul>
                            <li><a href = 'https://www.google.com/'>Rental Agreement</a></li>
                            <li><a href = 'https://www.google.com/'>Credit Application Form</a></li>
                            <li><a href = 'https://www.google.com/'>Credit Application Update Form</a></li>
                        </ul>

                    </div>

                    <div className = 'downloadCard'>
                        <h1>LEGAL</h1>
                        <ul>
                            <li style = {{cursor: 'pointer'}} onClick = {handleTerms}>Terms Of Use</li>
                            <li style = {{cursor: 'pointer'}} onClick = {handlePrivacy}>Privacy Policy</li>
                        </ul>
                    </div>

                </div>

                <div className = ''>
                    {terms ? <TermsOfUse /> : null}
                    {privacy ? <PrivacyPolicy /> : null}
                </div>
            </div>
        </div>
    )
}

export default Resources
