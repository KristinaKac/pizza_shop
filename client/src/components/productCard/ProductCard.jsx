import React, { useState } from 'react';
import css from './ProductCard.module.css';
import Button from 'react-bootstrap/Button';
import pizza from '../../static/pizza1.jpg'
import { NavLink } from 'react-router-dom';
import ProductModal from '../productInfo/ProductInfo';


const ProductCard = ({ product }) => {

    return (
        <li className={css.product_card}>
            <NavLink to={`/product/${product.id}`} className={css.body_product_card}>
                <img style={{ width: '95%' }} src={'http://localhost:5000/' + product.img} alt="pizza" />
                <h2>{product.name}</h2>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
            </NavLink>
            <div className={css.footer_product_card}>
                <div className={css.product_card_price}>{product.price}</div>
                <Button className={css.add_to_card_btn} variant="danger">Выбрать</Button>
            </div>
        </li>
    )
}
export default ProductCard;