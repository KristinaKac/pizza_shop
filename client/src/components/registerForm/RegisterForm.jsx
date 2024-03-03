import React from 'react';
import css from './RegisterForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { NavLink } from 'react-router-dom';
import RegisterFormValidation from './RegisterFormValidation';

const RegisterForm = () => {
    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={RegisterFormValidation}

            onSubmit={(values, { setSubmitting }) => {

                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);

            }}
        >
            {({ isSubmitting }) => (
                <Form className={css.form}>
                    <h2>Регистрация</h2>
                    <div className={css.form_control}>
                        <label htmlFor="name">Имя</label>
                        <Field className={css.input} type="text" name="name" />
                        <ErrorMessage name="name" component="div" />
                    </div>
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
                        Есть аккаунт?
                        <NavLink to='/login'>Зайдите!</NavLink>
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        Войти
                    </button>
                </Form>
            )}
        </Formik>
    )
}
export default RegisterForm;