import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BasketForm from '../../components/basketForm/BasketForm';
import { getProductsThunk, productsIdAtCartThunk, setBasketProduct, setSumm } from '../../redux/slices/basket';
import css from './Basket.module.css';
import BasketCard from './BasketCard';

const Basket = () => {

    const dispatch = useDispatch();
    const basket = useSelector((state) => state.basketReducer.basket);
    const products = useSelector((state) => state.basketReducer.products);
    const basketProduct = useSelector((state) => state.basketReducer.basketProduct);
    const summ = useSelector((state) => state.basketReducer.summ);

    useEffect(() => {
        dispatch(productsIdAtCartThunk());
        dispatch(getProductsThunk());
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
            <h2>Корзина</h2>
            <div className={css.basket}>
                <ul className={css.basket_list}>
                    {basketProduct.items.map(item => <BasketCard item={item} />)}
                </ul>
                <div>Сумма заказа:
                    {summ}
                </div>
                <BasketForm />
            </div>
        </div>
    )
}
export default Basket;