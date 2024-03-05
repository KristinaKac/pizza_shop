import React, { useEffect } from 'react';
import pizza from '../../static/pizza1.jpg';
import css from './Menu.module.css'
import ProductCard from '../../components/productCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsThunk } from '../../redux/slices/product';
import Paginator from '../../components/pagination/Paginator';

const Menu = () => {

    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.productReducer.products.currentPage);
    const limitProductOnPage = useSelector((state) => state.productReducer.products.limitProductOnPage);

    useEffect(() => {
        dispatch(getAllProductsThunk({typeId: null, limit: limitProductOnPage, page: 1}));
    }, []);

    useEffect(() => {
        dispatch(getAllProductsThunk({typeId: null, limit: limitProductOnPage, page: currentPage}));
    }, [currentPage])

    const products = useSelector((state) => state.productReducer.products);

    return (
        <div className={css.menu_section}>
            <h2>Пиццы</h2>
            <ul className={css.products_list}>
                {products.items.map(product => <ProductCard product={product} />)}
            </ul>
            <Paginator />
        </div>
    )
}
export default Menu;