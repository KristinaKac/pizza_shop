import React, { useEffect } from 'react';
import pizza from '../../static/pizza1.jpg';
import css from './Menu.module.css'
import ProductCard from '../../components/productCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsThunk } from '../../redux/slices/product';

const Menu = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProductsThunk());
    }, []);

    const products = useSelector((state) => state.productReducer.products);

    return (
        <div className={css.menu_section}>
            <h2>Пиццы</h2>
            <ul className={css.products_list}>
                {products.items.map(product => <ProductCard product={product} />)}
            </ul>
        </div>
    )
}
export default Menu;