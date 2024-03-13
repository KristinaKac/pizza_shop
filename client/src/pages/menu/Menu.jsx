import React, { useEffect } from 'react';
import css from './Menu.module.css'
import ProductCard from '../../components/productCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsThunk } from '../../redux/slices/product';
import Paginator from '../../components/pagination/Paginator';
import { getAllTypesThunk } from '../../redux/slices/admin';
import TypeNav from '../../components/typeNav/TypeNav';

const Menu = () => {

    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.productReducer.products.currentPage);
    const limitProductOnPage = useSelector((state) => state.productReducer.products.limitProductOnPage);
    const types = useSelector((state) => state.adminReducer.types);

    useEffect(() => {
        dispatch(getAllProductsThunk({ typeId: null, limit: limitProductOnPage, page: 1 }));
        dispatch(getAllTypesThunk());
    }, []);

    useEffect(() => {
        dispatch(getAllProductsThunk({ typeId: null, limit: limitProductOnPage, page: currentPage }));
    }, [currentPage])

    const products = useSelector((state) => state.productReducer.products);

    return (
        <div className={css.menu_section}>
            <ul className={css.type_block}>
                {types.items.map(type => <TypeNav type={type} />)}
            </ul>
            <div className={css.menu}>
                <h2>Пиццы</h2>
                <ul className={css.products_list}>
                    {products.items.map(product => <ProductCard product={product} />)}
                </ul>
                <Paginator />
            </div>
        </div>
    )
}
export default Menu;