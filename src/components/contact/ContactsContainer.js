import React,{useContext} from "react";
import ContactContext from "../../store/contactContext";
import AddContact from "./AddContact";
import ContactsProfile from "./ContactsProfile";

const ContactsContainer = () => {
    const contactContext = useContext(ContactContext);
    const {contacts, filtered} = contactContext;

    return(
        <div className="container">
            <h4 className="list_header">Friends List</h4>
            <AddContact />
            <ContactsProfile contacts={filtered !== null ? filtered : contacts}/>
        </div>
    )
}

export default ContactsContainer;