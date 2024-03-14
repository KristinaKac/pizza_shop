import React, { useEffect } from 'react';
import css from './Menu.module.css'
import ProductCard from '../../components/productCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsThunk } from '../../redux/slices/product';
import Paginator from '../../components/pagination/Paginator';
import { getAllTypesThunk, setProductsByType } from '../../redux/slices/admin';
import TypeNav from '../../components/typeNav/TypeNav';

const Menu = () => {

    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.productReducer.products.currentPage);
    const limitProductOnPage = useSelector((state) => state.productReducer.products.limitProductOnPage);
    const types = useSelector((state) => state.adminReducer.types);
    const products = useSelector((state) => state.productReducer.products);

    useEffect(() => {
        dispatch(getAllTypesThunk());
        dispatch(getAllProductsThunk({ typeId: null, limit: limitProductOnPage, page: 1 }));
    }, []);

    useEffect(() => {
        dispatch(getAllProductsThunk({ typeId: null, limit: limitProductOnPage, page: currentPage }));
    }, [currentPage])

    return (
        <div className={css.menu_section}>
            <ul className={css.type_block}>
                {types.items.map(type => <TypeNav type={type} />)}
            </ul>
            <div className={css.menu}>

                {types.status === 'loaded' &&
                    types.items.map(type =>
                        <div key={type.id}>
                            <h2 className={css.menu_title} id={type.id}>{type.name}</h2>

                            <ul className={css.products_list}>

                                {products.items.map(product =>
                                    product.typeId === type.id && <ProductCard key={product.id} product={product} />
                                )}
                            </ul>
                        </div>
                    )
                }
                <Paginator />
            </div>
        </div >
    )
}
export default Menu;