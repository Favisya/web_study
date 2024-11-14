export function setContactsToStore(contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

export function getContactFromStore() {
    const contacts = localStorage.getItem('contacts')

    return contacts ? JSON.parse(contacts) : [];
}