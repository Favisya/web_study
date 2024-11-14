import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import './contacts-list.scss';
import ContactStore from '../../contactStore';
import { observer } from 'mobx-react';

const ContactList = observer((onContactClick) => {
    const contacts = ContactStore.getContactList;

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
})

export default ContactList;