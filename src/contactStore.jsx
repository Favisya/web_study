import { makeAutoObservable } from 'mobx'
import { getContactFromStore, setContactsToStore } from './utils/localStorage';

class ContactStore {
    constructor() {
        makeAutoObservable(this);
        this.contacts = getContactFromStore()
    }

    contacts = [];

    addContact(contact) {
        contact.id = this.contacts.length + 1;

        this.contacts.push(contact);
        setContactsToStore(this.contacts);
    }

    removeContact(contact) {
        this.contacts = this.contacts.filter(c => c.id !== contact.id);
        setContactsToStore(this.contacts);
    }

    updateContact(contact) {
        const index = this.contacts.findIndex(c => c.id === contact.id);

        if (index !== -1) {
            this.contacts[index] = contact;
        }

        setContactsToStore(this.contacts);
    }

    get getContactList() {
        return this.contacts
    }
}

const contactStore = new ContactStore();
export default contactStore;