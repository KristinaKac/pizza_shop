import React, { useEffect } from 'react';
import css from './Header.module.css';
import Navbar from '../navbar/Navbar';
import logo from '../../static/logo.png'
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';


const Header = () => {

    const isAuth = useSelector((state) => state.userReducer.isAuth);

    const userName = 'Kristina';

    return (
        <div className={css.header_back}>
            <div className={css.header_wrapper}>
                <div className={css.header}>
                    <div className={css.header_block}>
                        <NavLink>
                            <img style={{ width: '50px' }} src={logo} alt="logo" />
                        </NavLink>

                        <Navbar />
                    </div>

                    <div className={css.header_block}>
                        {isAuth && <div>{`Hello, ${userName}`}</div>}
                        {isAuth
                            ? <Button variant="primary">Logout</Button>
                            : <Button variant="primary"><NavLink style={{textDecoration: 'none', color: 'white'}} to='/login'>Войти</NavLink></Button>
                        }
                        {isAuth && <NavLink to='/basket'>Корзина</NavLink>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;