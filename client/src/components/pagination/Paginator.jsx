import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/product';

const Paginator = () => {

    const pages = [];
    const portionSize = 3;

    const dispatch = useDispatch();

    const currentPage = useSelector((state) => state.productReducer.products.currentPage);
    const limitProductOnPage = useSelector((state) => state.productReducer.products.limitProductOnPage);
    const totalCountProduct = useSelector((state) => state.productReducer.products.count);
    const totalCountPages = Math.ceil(totalCountProduct / limitProductOnPage);
    const totalCountPagesArr = [];

    for (let i = 0; i < totalCountPages; i++) {
        totalCountPagesArr[i] = i;
    }


    const clickPrevPage = () => {
        if (currentPage === 1) return;

        dispatch(setCurrentPage(currentPage - 1));
    }
    const clickNextPage = () => {
        if (currentPage === totalCountPagesArr.length) return;

        dispatch(setCurrentPage(currentPage + 1));
    }
    const clickFirstPage = () => {
        dispatch(setCurrentPage(1));
    }
    const clickLastPage = () => {
        dispatch(setCurrentPage(totalCountPagesArr.length));
    }

    const start = Math.max(1, Math.round(currentPage - portionSize / 2));
    const end = Math.min(totalCountPages, Math.round(currentPage + portionSize / 2));


    for (let i = start; i <= end; i++) {
        pages.push(
            <Pagination.Item active={currentPage === i} onClick={() =>
                dispatch(setCurrentPage(i))
            }>{i}
            </Pagination.Item>
        )
    }

    return (
        <Pagination>
            <Pagination.First onClick={() => clickFirstPage()} />
            <Pagination.Prev onClick={() => clickPrevPage()} />
            {start !== 1 && <Pagination.Ellipsis />}
            {pages}
            {end !== totalCountPagesArr.length && <Pagination.Ellipsis />}
            <Pagination.Next onClick={() => clickNextPage()} />
            <Pagination.Last onClick={() => clickLastPage()} />
        </Pagination>
    )
}
export default Paginator;