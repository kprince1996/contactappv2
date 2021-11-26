import React, {useContext} from "react";
import ContactContext from "../../store/contactContext";
import favIcon from '../../icons/fav.png';
import notFavIcon from '../../icons/not_fav.png';
import deleteIcon from '../../icons/trash_icon.png';

const ContactCard = ({contact}) => {
    const contactContext = useContext(ContactContext)
    const {deleteContact, toogleFavorite} = contactContext;

    const toggleFav = e => {       
        e.preventDefault();

        var updatedContact = {
            id: contact.id,
            name: contact.name,
            isFav: !contact.isFav
        }
        toogleFavorite(updatedContact);
    }
    const handleDelete = e =>{
        e.preventDefault();
        deleteContact(contact.id);
    }
    return(
        <li className='card'>
            <div className='card_item'>
                <p className='contact_name'>{contact.name}</p>
                <span className='contact_friend_label'>{'is your friend'}</span>
            </div>
            
            <div className='card_icon'>
                {contact.isFav ? 
                    <img src={favIcon} onClick={toggleFav} className="icons" alt="Favourite icon" /> :
                    <img src={notFavIcon} onClick={toggleFav} className="icons" alt="Not a favourite icon"/>
                }
                    <img src={deleteIcon} onClick={handleDelete} className="icons" alt="Delete icon"/>
                    
            </div>
        </li>
    )

}

export default ContactCard;