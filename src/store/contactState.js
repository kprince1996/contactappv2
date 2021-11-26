import React,{useReducer} from 'react';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';

const ContactState = props => {
    const initialState = {
        contacts: [],
        filtered: null,
    }

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    const addContact = (contact) => {
        dispatch({type: "ADD_CONTACT", payload: contact})
    }

    const deleteContact = (id) => {
        dispatch({type: "DELETE_CONTACT", payload: id})
    }

    const filterContacts = (text) =>{
        dispatch({type: "FILTER_CONTACTS", payload: text})
    }

    const toogleFavorite = (contact) => {
        dispatch({type: "TOOGLE_FAV", payload: contact})
    }

    const clearFilters = () =>
    {
        dispatch({type: "CLEAR_FILTER"})
    }

    return <ContactContext.Provider
    value={{
        contacts: state.contacts,
        loading: state.loading,
        filtered: state.filtered,
        addContact,
        deleteContact,
        filterContacts,
        toogleFavorite,
        clearFilters
    }}>
        {props.children}
    </ContactContext.Provider>
}

export default ContactState;