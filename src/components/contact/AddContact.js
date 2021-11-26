import React,{ useState, useContext } from "react";
import {v4 as uuid} from 'uuid';
import ContactContext from '../../store/contactContext';

function AddContact() {
    const contactContext = useContext(ContactContext);
    const {contacts, addContact, filterContacts, clearFilters} = contactContext;
    const [name, setName] = useState("");

    const onChange = e => {
        e.preventDefault();

        setName(e.target.value);

        if(e.target.value !== '') {
            filterContacts(e.target.value);
        }
        else{
            clearFilters();
        }
    }

    const onSubmit = e => {
        e.preventDefault();

        if (name === '') {
            alert("Name cannot be empty");
        }
        else {
            const contact = {
                id: uuid(),
                name: name,
                isFav: false
            };
            
            if(contacts.filter(c=>c.name === contact.name).length > 0)
            {
                alert('Entered name already exists...')
            }
            else{
                addContact(contact);
                setName("");
            }
        }

    };

    return (
        <form onSubmit={onSubmit}>
            <input
                className="add_input"
                name="name"
                value={name}
                onChange={onChange}
                placeholder={"Enter your friend's Name "} />
        </form>
    );
}

export default AddContact;