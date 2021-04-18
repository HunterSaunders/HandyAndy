import React from 'react'
import './FAQ.scss'
import FAQSection from '../../components/FAQ/FAQBox'

const FAQ = () => {
    return (
        <div className = 'faqWrapper'>
            <div className = 'faqContainer'>
                <div className = 'faqSection'>
                    <h1>FREQUENTLY ASKED QUESTIONS</h1>
                    <FAQSection />
                </div>
            </div>
        </div>
    )
}

export default FAQ
