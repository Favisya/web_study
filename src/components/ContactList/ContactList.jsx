import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts } from '../../selectors/contactsSelector';
import './contacts-list.scss';

function ContactList( onContactClick) {
    const contacts = useSelector(getContacts);

    return (
        <ul className={'contacts-list'}>
            {contacts.map((contact) => (
                <ContactListItem
                    key={contact.id}
                    contact={contact}
                    onContactClick={onContactClick}
                />
            ))}
        </ul>
    );
}

export default ContactList;