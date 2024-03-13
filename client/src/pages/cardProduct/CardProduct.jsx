import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProductThunk } from '../../redux/slices/product';
import css from './CardProduct.module.css';
import Button from 'react-bootstrap/Button';
import { addToCartThunk } from '../../redux/slices/basket';

const CardProduct = () => {

    const dispatch = useDispatch();
    const product = useSelector((state) => state.productReducer.product);

    console.log(product)

    const addToCart = () => {
        dispatch(addToCartThunk(product.item.id));
    }

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(getOneProductThunk(id));
        }
    }, []);


    return (
        <div className={css.card}>
            <div className={css.card_img}>
                <img src={'http://localhost:5000/' + product.item.img} alt='product' />
            </div>
            <div className={css.card_info}>
                <div className={css.card_title}>{product.item.name}</div>
                {product?.item?.info?.map(row =>
                    <div className={css.info}>
                        <span className={css.info_title}>{row.title} </span>
                        <span>{row.description}</span>
                    </div>
                )}
                <div className={css.card_info_offer}>
                    <div className={css.card_price}>{product.item.price}&#8381;</div>
                    <Button onClick={() => addToCart()} className={css.add_to_card_btn} variant="danger">
                        Добавить в корзину  <i class="bi bi-bag-plus"></i>
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default CardProduct;