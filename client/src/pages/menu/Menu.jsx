import React from 'react';
import pizza from '../../static/pizza1.jpg';
import css from './Menu.module.css'
import ProductCard from '../../components/productCard/ProductCard';

const Menu = () => {

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
        <div className={css.menu_section}>
            <h2>Пиццы</h2>
            <ul className={css.products_list}>
                {products.map(product => <ProductCard img={product.img} name={product.name} price={product.price} />)}
            </ul>
            <h2>Паста</h2>
            <ul className={css.products_list}>
                {products.map(product => <ProductCard img={product.img} name={product.name} price={product.price} />)}
            </ul>
            <h2>Десерт</h2>
            <ul className={css.products_list}>
                {products.map(product => <ProductCard img={product.img} name={product.name} price={product.price} />)}
            </ul>
        </div>
    )
}
export default Menu;