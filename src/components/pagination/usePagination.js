import {useMemo} from 'react';

export const DOTS = '...';

const range = (start, end) =>{
    let length = end -start+1;

    //create a array for current pgae
    return Array.from({length}, (_, index)=> index+start);
}

export const usePagination = ({totalCount, pageSize, siblingCount = 1, currentPage}) => {
    const paginationRange = useMemo(()=>{       
        //calculate total page count
        const totalPageCount = Math.ceil(totalCount/pageSize);

        //for siblings count
        const totalPageNumbers = siblingCount + 3;
        
        // CASE 1 : no of pages is less than page numbers visible
        if(totalPageNumbers >= totalPageCount)
        {
            return range(1, totalPageCount);
        }
        
        //left sibling index
        const leftSiblingsIndex = Math.max(currentPage-siblingCount, 1);
        //right sibling index
        const rightSiblingsIndex = Math.min(currentPage+siblingCount, totalPageCount);

        // to check if dots are visible on left
        const shouldShowLeftDots = leftSiblingsIndex >2;

        // to check if dots are visible on right
        const shouldShowRightDots = rightSiblingsIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        // CASE 2 : No left dots to show
        if(!shouldShowLeftDots && shouldShowRightDots)
        {
            let leftItemCount = 1 +2 *siblingCount;
            let leftRange = range(1, leftItemCount);
            
            return [...leftRange, DOTS, totalPageCount];
        }

        //CASE 3 : No right dots to show
        if(shouldShowLeftDots && !shouldShowRightDots)
        {
            let rightItemCount = 1 + 2*siblingCount;
            let rightRange = range(totalPageCount- rightItemCount +1, totalPageCount)

            return [firstPageIndex, DOTS, ...rightRange];
        }

        // CASE 4 : Both left and right dots to be shown
        if(shouldShowLeftDots & shouldShowRightDots)
        {
            let middleRange = range(leftSiblingsIndex, rightSiblingsIndex);
            
            return [firstPageIndex, DOTS, ...middleRange, lastPageIndex];
        }
    },[totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange;
}