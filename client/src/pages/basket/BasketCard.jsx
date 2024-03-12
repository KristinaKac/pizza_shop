import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { removeFromCartThunk } from '../../redux/slices/basket';
import css from './Basket.module.css';

const BasketCard = ({item}) => {

    const dispatch = useDispatch();

    const removeProduct = () => {
        dispatch(removeFromCartThunk(item.product.id))
    }
    
    return (
        <li className={css.basket_item}>
            <div className={css.basket_control}>
                <img style={{ width: '90px' }} src={'http://localhost:5000/' + item.product.img} alt="product" />
                <span>{item.product.name}</span>
            </div>
            <div className={css.basket_control}>
                <span>{item.product.price}</span>
                <div>{item.amount}</div>
                <Button onClick={() => removeProduct()}>remove</Button>
            </div>
        </li>
    )
}
export default BasketCard;