import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/product';

const Paginator = () => {

    const dispatch = useDispatch();

    const currentPage = useSelector((state) => state.productReducer.products.currentPage);
    const limitProductOnPage = useSelector((state) => state.productReducer.products.limitProductOnPage);
    const totalCountProduct = useSelector((state) => state.productReducer.products.count);
    const totalCountPages = Math.ceil(totalCountProduct / limitProductOnPage);
    const totalCountPagesArr = [];

    for (let i = 0; i < totalCountPages; i++) {
        totalCountPagesArr[i] = i;
    }

    const [portionNumber, setPortionNumber] = useState(1);
    const portionSize = 3;

    let portionCount = Math.ceil(totalCountPages / portionSize);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    const clickPrevPage = () => {
        if (currentPage === 1) return;

        dispatch(setCurrentPage(currentPage - 1));

        if (currentPage === leftPortionPageNumber) {
            setPortionNumber(portionNumber - 1)
        }
    }
    const clickNextPage = () => {
        if (currentPage === totalCountPagesArr.length) return;

        dispatch(setCurrentPage(currentPage + 1));

        if (currentPage === rightPortionPageNumber) {
            setPortionNumber(portionNumber + 1)
        }
    }
    const clickFirstPage = () => {
        dispatch(setCurrentPage(1));
        setPortionNumber(1)
    }
    const clickLastPage = () => {
        dispatch(setCurrentPage(totalCountPagesArr.length));
        setPortionNumber(portionCount);
    }


    return (
        <Pagination>
            <Pagination.First onClick={() => clickFirstPage()} />
            <Pagination.Prev onClick={() => clickPrevPage()} />
            <Pagination.Ellipsis />
            {totalCountPagesArr
                .filter(page => page + 1 >= leftPortionPageNumber && page + 1 <= rightPortionPageNumber)
                .map(page =>
                    <Pagination.Item active={currentPage === page + 1} onClick={() =>
                        dispatch(setCurrentPage(page + 1))
                    }>{page + 1}</Pagination.Item>
                )}
            <Pagination.Ellipsis />
            <Pagination.Next onClick={() => clickNextPage()} />
            <Pagination.Last onClick={() => clickLastPage()} />
        </Pagination>
    )
}
export default Paginator;