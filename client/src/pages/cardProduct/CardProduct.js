import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProductThunk } from '../../redux/slices/product';
import css from './CardProduct.module.css';

const CardProduct = () => {

    const dispatch = useDispatch();
    const product = useSelector((state) => state.productReducer.product)

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(getOneProductThunk(id));
        }
    }, []);


    return (
        <div className={css.card}>
            <div className={css.card_img}>
                <img src={'http://localhost:5000/' + product.item.img} alt='product'/>
            </div>
            <div className={css.card_info}>
                <div className={css.card_title}>{product.item.name}</div>
                <div className={css.card_price}>{product.item.price}</div>
                <div className={css.card_rating}>{product.item.rating}</div>
            </div>
        </div>
    )
}
export default CardProduct;