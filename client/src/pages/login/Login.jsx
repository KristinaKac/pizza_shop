import React, { useEffect } from 'react'
import LoginForm from '../../components/loginForm/LoginForm';
import css from './Login.module.css';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const isAuth = useSelector((state) => state.userReducer.isAuth);

    useEffect(() => {
        if (isAuth) {
            navigate('/');
        }
    }, [isAuth]);

    return (
        <div className={css.login_page}>
            <LoginForm />
        </div>
    )
}
export default Login;