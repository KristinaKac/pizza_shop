import React from 'react';
import css from './BestProducts.module.css';
import Button from 'react-bootstrap/Button';
import pizza from '../../static/pizza1.jpg'
import ProductCard from '../productCard/ProductCard';

const BestProducts = () => {
    const products = [
        {
            img: pizza,
            name: 'Classic Chicken',
            price: '600 руб'
        },
        {
            img: pizza,
            name: 'Classic Chicken',
            price: '600 руб'
        },
        {
            img: pizza,
            name: 'Classic Chicken',
            price: '600 руб'
        },
        {
            img: pizza,
            name: 'Classic Chicken',
            price: '600 руб'
        },
    ]

    return (
        <div className={css.best_products_section}>
            <h2>Our Best Sellers</h2>
            <ul className={css.best_products_list}>
                {products.map(product => <ProductCard img={product.img} name={product.name} price={product.price} />)}
            </ul>
        </div>
    )
}
export default BestProducts;