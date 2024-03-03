import React from 'react';
import css from './ProductCard.module.css';
import Button from 'react-bootstrap/Button';
import pizza from '../../static/pizza1.jpg'
import { NavLink } from 'react-router-dom';

const ProductCard = ({ img, name, price }) => {

    return (
        <li className={css.product_card}>
            <NavLink className={css.body_product_card}>
                <img style={{ width: '95%' }} src={img} alt="pizza" />
                <h2>{name}</h2>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
            </NavLink>
            <div className={css.footer_product_card}>
                <div className={css.product_card_price}>{price}</div>
                <Button className={css.add_to_card_btn} variant="danger">Выбрать</Button>
            </div>
        </li>
    )
}
export default ProductCard;