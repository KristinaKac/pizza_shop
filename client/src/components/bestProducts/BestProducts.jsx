import React, { useEffect } from 'react';
import css from './BestProducts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsThunk } from '../../redux/slices/product';
import ProductCard from '../../components/productCard/ProductCard';

const BestProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productReducer.products);

    useEffect(() => {
        dispatch(getAllProductsThunk({ typeId: null, limit: 4, page: 1 }));
    }, []);

    return (
        <section className={css.section_best}>
            <h2>Популярное за месяц</h2>
            <ul className={css.products_list}>
                {products.items.map(product =>
                    <ProductCard key={product.id} product={product} />
                )}
            </ul>
        </section>

    )
}
export default BestProducts;