import React, { useEffect } from 'react';
import css from './AboutUs.module.css';
import pizza from '../../static/pizzeria.jpg'
import pizza2 from '../../static/pizzeria2.jpg'
import pizza3 from '../../static/pizzeria3.jpg'


const AboutUs = () => {

    return (
        <React.Fragment>
            <h2 id='about'>О нас</h2>
            <div className={css.section}>
                <div className={css.section_item}>
                    <div className={css.item_img}>
                        <img src={pizza} alt="pizza" />
                    </div>
                    <div className={css.item_info}>
                        <div className={css.item_title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div className={css.item_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                </div>
                <div className={css.section_item}>
                    <div className={css.item_img}>
                        <img src={pizza2} alt="pizza" />
                    </div>
                    <div className={css.item_info}>
                        <div className={css.item_title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div className={css.item_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                </div>
                <div className={css.section_item}>
                    <div className={css.item_img}>
                        <img src={pizza3} alt="pizza" />
                    </div>
                    <div className={css.item_info}>
                        <div className={css.item_title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div className={css.item_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default AboutUs;