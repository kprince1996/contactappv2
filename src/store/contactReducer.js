const contactReducer =  (state, action) => {
    switch(action.type)
    {
        case "ADD_CONTACT" :
            return {
                ...state, 
                contacts: [action.payload, ...state.contacts],
                filtered: null
            };
        case "TOOGLE_FAV":
            let contact = state.contacts.map(s=>s.id === action.payload.id ? action.payload : s)
            return {
                ...state,
                contacts : [...contact.filter(c=>c.isFav), ...contact.filter(c=>!c.isFav)]
            };
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(s=>s.id !== action.payload)
            }
        case "FILTER_CONTACTS":
            return{
                ...state,
                filtered: state.contacts.filter(
                    contact => {
                        const regex = new RegExp(`${action.payload}`, 'gi');
                        return contact.name.match(regex);
                    }
                )
            }
        case "CLEAR_FILTER":
            return{
                ...state,
                filtered: null
            }
        default: 
            return state;
    }
}

export default contactReducer;