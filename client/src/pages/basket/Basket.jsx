import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BasketForm from '../../components/basketForm/BasketForm';
import { getProductsThunk, productsIdAtCartThunk, setBasketProduct, setSumm } from '../../redux/slices/basket';
import css from './Basket.module.css';
import BasketCard from './BasketCard';
import { NavLink } from 'react-router-dom';

const Basket = () => {

    const dispatch = useDispatch();
    const basket = useSelector((state) => state.basketReducer.basket);
    const products = useSelector((state) => state.basketReducer.products);
    const basketProduct = useSelector((state) => state.basketReducer.basketProduct);
    const summ = useSelector((state) => state.basketReducer.summ);

    useEffect(() => {
        dispatch(productsIdAtCartThunk()); // ид товаров в корзине
        dispatch(getProductsThunk()); // весь список товаров
    }, []);

    useEffect(() => {
        const result = [];
        if (basket.status === 'loaded') {
            products.items.map(product => {
                if (Object.hasOwn(basket.productsId, product.id)) {
                    result.push({ product, amount: basket.productsId[product.id] })
                }
            })
            dispatch(setBasketProduct(result));
        }
    }, [basket]);

    useEffect(() => {
        if (basketProduct.status === 'loaded') {
            const summ = basketProduct.items.reduce((currentSum, current) => {
                return currentSum + (current.amount * current.product.price);
            }, 0);
            dispatch(setSumm(summ));
        }
    }, [basketProduct]);




    return (
        <div className={css.basket_wrapper}>
            <div className={css.basket_title}>
                <h2>Корзина</h2>
            </div>


            <div className={css.basket}>
                <ul className={css.basket_list}>
                    {basketProduct.items.map(item => <BasketCard item={item} />)}
                </ul>
                {basketProduct.items.length !== 0 && <BasketForm />}
            </div>

            {basketProduct.items.length !== 0
                ?
                <div className={css.basket_summa}>
                    <span className={css.basket_summa_title}>Сумма заказа: </span>
                    <span className={css.basket_summa_amount}>{summ}&#8381;</span>
                </div>
                : <div className={css.basket_empty}>
                    <span>Корзина пуста, добавьте что-нибудь из меню</span><br />
                    <NavLink className={css.btn_link_orange} to='/product'>Меню</NavLink>
                </div>
            }

        </div>
    )
}
export default Basket;