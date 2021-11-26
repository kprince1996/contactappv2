import React from 'react'
import { usePagination, DOTS } from './usePagination';

const Pagination = props =>{
    const {onPageChange, totalCount, siblingCount=1, currentPage, pageSize} = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    })

    if(currentPage === 0 || paginationRange.length <2)
    {
        return null;
    }

    const onNext = () =>{
        if(currentPage === lastPage)
        {
            alert('You are on the last page');
            return false;
        }
        onPageChange(currentPage+1);
    }

    const onPrevious = () =>{
        if(currentPage === 1)
        {
            alert('You are on the first page');
            return false;
        }
        onPageChange(currentPage - 1);
    }

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <ul className='pagination-container'>
            <li 
                key='left_arrow' 
                onClick={onPrevious}
                className='pagination-item'
            >
                <div className='arrow left' alt='left arrow'/>
            </li>
            {paginationRange.map(pageNumber =>{
                // if pageItem is a DOT, render the DOTS character.
                if(pageNumber === DOTS)
                {
                    return <li key={'dots'} onClick={()=> {return false;}} className="pagination-item dots">&#8230;</li>
                }

                //render our page
                return(
                    <li 
                        key = {pageNumber} 
                        onClick = {()=> onPageChange(pageNumber)}
                        className = 'pagination-item'
                    >
                        {pageNumber}
                    </li>
                )
            })}
            <li 
                key='right_arrow' 
                onClick={onNext}
                className='pagination-item'
            >
                <div className="arrow right"/>
            </li>
        </ul>
    )
}

export default Pagination;