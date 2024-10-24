import { useState } from 'react';

import ContactForm from '../../components/ContactForm/ContactForm';
import './contact-form-btn.scss'

function ContactsFormBtn (props) {
    const [showForm, setShowForm] = useState(false);

    const handleToggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className={'contact-form-btn'}>
            <button
                className={'contact-form-btn__btn'}
                onClick={handleToggleForm}
            >
                {props.text}
            </button>

            <ContactForm
                showForm={showForm}
                contact={props.contact}
                setShow={handleToggleForm}
            />
        </div>
    )
}

export default ContactsFormBtn;
