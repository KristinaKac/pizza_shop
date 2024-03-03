import React from 'react'
import RegisterForm from '../../components/registerForm/RegisterForm';
import css from './Register.module.css'

const Register = () => {
    return (
        <div className={css.register_page}>
            <RegisterForm />
        </div>
    )
}
export default Register;