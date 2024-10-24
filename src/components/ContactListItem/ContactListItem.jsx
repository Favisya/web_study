import React from 'react';
import { store } from '../../index';
import { deleteContact } from '../../actions/actions';
import ContactsFormBtn from '../ContactFormBtn/ContactFormBtn';
import './contacts-list-item.scss';

function ContactListItem(props) {
    const handleDeleteContact = () => {
        store.dispatch(deleteContact(props.contact.id));
    };

    return (
        <li className='contacts-list-item'>
            <div className={'contacts-list-item__info'}>
                <div className={'contacts-list-item__info-item'}>
                    Name: {props.contact.lastName} {props.contact.firstName}
                </div>
                <div className={'contacts-list-item__info-item'}>
                    Phone: {props.contact.phoneNumber}
                </div>
                <div className={'contacts-list-item__info-item'}>
                    Company: {props.contact.company}
                </div>
                <div className={'contacts-list-item__info-item'}>
                    Address: {props.contact.address}
                </div>
            </div>

            <div className={'contacts-list-item__btns-wr'}>
                <ContactsFormBtn
                    text={'Edit'}
                    contact={props.contact}
                />

                <button
                    className={'contacts-list-item__delete-btn'}
                    onClick={handleDeleteContact}
                >
                    Delete
                </button>
            </div>
        </li>
    );
}

export default ContactListItem;