import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from './actionTypes';

export function addContact(contact) {
    return { type: ADD_CONTACT, contact }
}

export function editContact(contact) {
    return { type: EDIT_CONTACT, contact }
}

export function deleteContact(id) {
    return { type: DELETE_CONTACT, id }
}
