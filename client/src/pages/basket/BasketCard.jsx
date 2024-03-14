import cn from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { decreaseCountThunk, increaseCountThunk, productsIdAtCartThunk, removeFromCartThunk } from '../../redux/slices/basket';
import css from './Basket.module.css';

const BasketCard = ({ item }) => {

    const dispatch = useDispatch();

    const removeProduct = () => {
        dispatch(removeFromCartThunk(item.product.id));
        dispatch(productsIdAtCartThunk());
    }
    const increaseCount = () => {
        dispatch(increaseCountThunk({ id: item.product.id }));
        dispatch(productsIdAtCartThunk());
    }
    const decreaseCount = () => {
        dispatch(decreaseCountThunk({ id: item.product.id }));
        dispatch(productsIdAtCartThunk());
    }


    return (
        <li className={css.basket_item}>
            <NavLink to={`/product/${item.product.id}`} className={css.basket_control}>
                <img style={{ width: '90px' }} src={'http://localhost:5000/' + item.product.img} alt="product" />
                <span className={css.item_name}>{item.product.name}</span>
            </NavLink>
            <div className={css.basket_control}>
                <span className={css.item_price}>{item.product.price * item.amount}&#8381;</span>
                <div className={css.item_amount}>
                    <button className={cn(css.btn_non_border, css.left)} onClick={() => increaseCount()}><i class="bi bi-plus"></i></button>
                    <div>{item.amount}</div>
                    <button className={cn(css.btn_non_border, css.right)} onClick={() => decreaseCount()}><i class="bi bi-dash"></i></button>
                </div>
                <button className={css.btn_orange} onClick={() => removeProduct()}><i class="bi bi-x-lg"></i></button>
            </div>
        </li>
    )
}
export default BasketCard;