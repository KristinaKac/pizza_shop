import React from 'react';
import pizza from '../../static/pizza1.jpg'
import Button from 'react-bootstrap/Button';
import css from './Basket.module.css';
import BasketForm from '../../components/basketForm/BasketForm';

const Basket = () => {
    return (
        <div className={css.basket_wrapper}>
            <h2>Корзина</h2>
            <div className={css.basket}>
                <ul className={css.basket_list}>
                    <li className={css.basket_item}>
                        <div className={css.basket_control}>
                            <img style={{ width: '90px' }} src={pizza} alt="" />
                            <span >Пепперони</span>
                        </div>
                        <div className={css.basket_control}>
                            <span>500p</span>
                            <Button><i className="bi bi-basket"></i></Button>
                        </div>
                    </li>
                </ul>
                <BasketForm />
            </div>
        </div>
    )
}
export default Basket;