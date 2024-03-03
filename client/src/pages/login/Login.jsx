import React from 'react'
import LoginForm from '../../components/loginForm/LoginForm';
import css from './Login.module.css';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Login = () => {

    const isAuth = useSelector((state) => state.userReducer.isAuth)

    if (isAuth) {
        <Navigate to='/' />
    }

    return (
        <div className={css.login_page}>
            <LoginForm />
        </div>
    )
}
export default Login;