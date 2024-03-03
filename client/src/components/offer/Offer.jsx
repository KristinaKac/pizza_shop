import React from 'react';
import css from './Offer.module.css';
import Button from 'react-bootstrap/Button';
import pizza from '../../static/pizza1.jpg'

const Offer = () => {
    return (
        <div className={css.offer}>
            <div className={css.offer_description}>
                <h1>Специальное предложение</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut eius, necessitatibus.</span>
                <div className={css.offer_btns}>
                    <Button variant="primary">Order now</Button>
                    <Button variant="primary">Learn more</Button>
                </div>
            </div>
            <div className={css.offer_img}>
                <img style={{width: '500px'}} src={pizza} alt="pizza" />
            </div>
        </div>
    )
}
export default Offer;