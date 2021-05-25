import './ContactForm.scss'

const ContactForm = (props) => {
    return (
        <div className= 'contactFormContainer'>
            <h1 className = 'contactFormHeader'>{props.headerText}</h1>
            <p className = 'formNote'>All Field Are Required</p>
            <form className = 'contactForm' autoComplete="off">
                <input type = 'text' name = 'name' placeholder = 'Name' className = 'nameInput inputField'/>
                <input type = 'text' name = 'number' placeholder = 'Phone' className = 'phoneInput inputField'/>
                <input type = 'text' name = 'email' placeholder = 'Email' className = 'emailInput inputField'/>
                <input type = 'text' name = 'subject' placeholder = 'Subject' className = 'subjectInput inputField'/>
                <textarea type = 'text' name = 'message' placeholder = 'Message' className = 'messageInput inputField'/>
                <input type="submit" value="SEND" className = 'submitButton inputField'></input>
            </form>
        </div>
    )
}

export default ContactForm
