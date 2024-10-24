import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from '../actions/actionTypes';

export const initialState = {
    contacts: [
        {
            id: 1,
            firstName: "support",
            lastName: "tech",
            company: "Phone Book",
            address: "Taganrog",
            phoneNumber: "79286085692",
        }
    ],
};

function contactReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_CONTACT:
            const newContact = { ...action.contact };
            newContact.id = state.contacts.length + 1;

            return {
                ...state,
                contacts: [...state.contacts, newContact]
            }
        case EDIT_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map((contact) => {
                    if (contact.id === action.contact.id) {
                        return {
                            ...contact,
                            ...action.contact
                        }
                    }

                    return contact;
                })
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.id)
            }
        default:
            return state;
    }
}

export default contactReducer;