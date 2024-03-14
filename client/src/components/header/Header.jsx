import React, { useEffect, useState } from 'react';
import css from './Header.module.css';
import Navbar from '../navbar/Navbar';
import logo from '../../static/logo.png'
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuth, setUser } from '../../redux/slices/user';


const Header = () => {

    const dispatch = useDispatch();

    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const user = useSelector((state) => state.userReducer.user);

    const [hover, setHover] = useState(false);

    const logout = () => {
        dispatch(setIsAuth(false));
        dispatch(setUser({ userInfo: {}, status: 'loading' }));
        localStorage.removeItem('token');
    }

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
                        {isAuth && <div>{`Добро пожаловать, ${user.userInfo.name}`}</div>}

                        <NavLink
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            className={css.btn_link_transparent} to='/basket'>
                            {hover
                                ? <i class="bi bi-bag-fill"></i>
                                : <i class="bi bi-bag"></i>
                            }
                        </NavLink>

                        {isAuth
                            ? <button className={css.btn_orange} onClick={() => logout()}>Выйти</button>
                            : <button className={css.btn_orange}>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/login'>Войти</NavLink>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;