import React from 'react';
import css from './Navbar.module.css';
import { NavLink } from "react-router-dom"
import { useSelector } from 'react-redux';

const Navbar = () => {

    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const isAdmin = useSelector((state) => state.userReducer.isAdmin);

    return (
        <ul className={css.navbar}>
            <li className={css.navbar_item}>
                <NavLink to='/' className={css.navbar_item_link}>
                    Главная
                </NavLink>
            </li>
            <li className={css.navbar_item}>
                <NavLink to='/product' className={css.navbar_item_link}>
                    Меню
                </NavLink>
            </li>
            <li className={css.navbar_item}>
                <a href="#about" className={css.navbar_item_link}>
                О нас
                </a>
                {/* <NavLink to='#about' className={css.navbar_item_link}>
                    
                </NavLink> */}
            </li>
            <li className={css.navbar_item}>
                <NavLink to='/contact' className={css.navbar_item_link}>
                    Контакты
                </NavLink>
            </li>
            {isAuth & isAdmin &&
                <li className={css.navbar_item}>
                    <NavLink to='/admin' className={css.navbar_item_link}>
                        Управление сайтом
                    </NavLink>
                </li>
            }
        </ul>
    )
}
export default Navbar;