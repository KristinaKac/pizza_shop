import React, { useEffect } from 'react'
import RegisterForm from '../../components/registerForm/RegisterForm';
import css from './Register.module.css';
import { registration } from '../../http/userAPI';
import { useSelector } from 'react-redux';

const Register = () => {

    return (
        <div className={css.register_page}>
            <RegisterForm />
        </div>
    )
}
export default Register;