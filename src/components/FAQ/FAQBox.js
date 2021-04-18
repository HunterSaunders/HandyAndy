import React, {useState} from 'react'
import './FAQBox.scss'
import { faqItems } from './FAQcontent'

const FAQSection = () => {


    const [clicked, setClicked] = useState(false);

    const showAnswer = index => {
        if (clicked === index){
            return setClicked(null)
        }
        setClicked(index)
    }

    



    return (
        <div className = 'faqContainerBox'>

            <ul className = 'faqList'>
                {faqItems.map (( item , index ) => {
                    return (
                        <li key = {index}>
                            <div className = 'questionContainer' onClick = {() => showAnswer(index)} key = {index}>
                                <div className = 'question'>
                                    {item.question}
                                </div>
                                <div className = 'icon'>
                                    <i className= {clicked === index ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
                                </div>
                                
                            </div>
                            {clicked === index ? (

                            <div className = 'answerContainer'>
                                <p>{item.answer}</p>
                            </div>

                            ) : null}
                        </li>
                    )
                })}
            </ul>
            
        </div>
    )
}

export default FAQSection
