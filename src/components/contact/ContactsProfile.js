import React, {useMemo, useState} from "react";
import Pagination from "../pagination/Pagination";
import ContactCard from './ContactCard';

function ContactsProfile({contacts}) {
    let PageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(()=> {
        const firstPageIndex = (currentPage-1 ) * PageSize; 
        const lastPageIndex = firstPageIndex + PageSize;
        return contacts.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, contacts, PageSize]);

    return(
        <>
            <ul>
            {currentTableData && currentTableData.map(contact => 
                { return <ContactCard contact={contact} key={contact.id}/>})}
            </ul>
            <Pagination
                currentPage={currentPage}
                totalCount={contacts.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    )
}

export default ContactsProfile;