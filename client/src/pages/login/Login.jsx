import React from 'react'
import LoginForm from '../../components/loginForm/LoginForm';
import css from './Login.module.css'

const Login = () => {
    return (
        <div className={css.login_page}>
            <LoginForm />
        </div>
    )
}
export default Login;