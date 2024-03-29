import React from 'react';
import css from './LoginForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import LoginFormValidation from './LoginFormValidation';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/slices/user';


const LoginForm = () => {
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginFormValidation}

            onSubmit={(values, { setSubmitting }) => {
                dispatch(loginThunk({email: values.email, password: values.password}));
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form className={css.form}>
                    <h2>Авторизация</h2>
                    <div className={css.form_control}>
                        <label htmlFor="email">Почта</label>
                        <Field className={css.input} type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div className={css.form_control}>
                        <label htmlFor="password">Пароль</label>
                        <Field className={css.input} type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>

                    <div>
                        Нет аккаунта?
                        <NavLink to='/register'>Зарегистрируйтесь!</NavLink>
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        Войти
                    </button>
                </Form>
            )}
        </Formik>
    )
}
export default LoginForm;