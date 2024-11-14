import React, { useState } from 'react';
import './contact-form.scss'
import contactStore from '../../contactStore';

function ContactForm(props) {
    const [contact, setContact] = useState({
        id: props.contact?.id || '',
        firstName: props.contact?.firstName || '',
        lastName: props.contact?.lastName || '',
        company: props.contact?.company || '',
        address: props.contact?.address || '',
        phoneNumber: props.contact?.phoneNumber || '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!contact.id) {
            contactStore.addContact(contact);
            props.setShow();
            setContact({});

            return;
        }

        props.setShow();
        contactStore.updateContact(contact);
    };

    return (
        <div className={'contact-form'}>
            {props.showForm && (
                <form
                    className={'contact-form__form'}
                    onSubmit={handleSubmit}
                >
                    <input
                        className={'contact-form__input'}
                        type="text"
                        name="firstName"
                        value={contact.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                    />
                    <input
                        className={'contact-form__input'}
                        type="text"
                        name="lastName"
                        value={contact.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                    />
                    <input
                        className={'contact-form__input'}
                        type="text"
                        name="company"
                        value={contact.company}
                        onChange={handleInputChange}
                        placeholder="Company"
                    />
                    <input
                        className={'contact-form__input'}
                        type="text"
                        name="address"
                        value={contact.address}
                        onChange={handleInputChange}
                        placeholder="Address"
                    />
                    <input
                        className={'contact-form__input'}
                        type="text"
                        name="phoneNumber"
                        value={contact.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                    />
                    <button
                        type="submit"
                        className={'contact-form__btn'}
                    >
                        Save
                    </button>
                </form>
            )}
        </div>
    );
}

export default ContactForm;