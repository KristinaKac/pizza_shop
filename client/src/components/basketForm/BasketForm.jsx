import React from 'react';
import css from './BasketForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BasketFormValidation from './BasketFormValidation';

const BasketForm = () => {

    return (
        <Formik
            initialValues={{ name: '', phone: '', address: '' }}
            validationSchema={BasketFormValidation}

            onSubmit={(values, { setSubmitting }) => {

                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);

            }}
        >
            {({ isSubmitting }) => (
                <div className={css.form_wrapper}>
                    <Form className={css.form}>
                        <h2>Оформление заказа</h2>
                        <div className={css.form_control}>
                            <label className={css.form_label} htmlFor="name">Ваше имя</label>
                            <Field className={css.input} type="text" name="name" />
                            <ErrorMessage className={css.error} name="name" component="div" />
                        </div>
                        <div className={css.form_control}>
                            <label className={css.form_label} htmlFor="phone">Номер телефона</label>
                            <Field className={css.input} type="text" name="phone" />
                            <ErrorMessage className={css.error} name="phone" component="div" />
                        </div>
                        <div className={css.form_control}>
                            <label className={css.form_label} htmlFor="address">Адрес доставки</label>
                            <Field className={css.input} type="text" name="address" />
                            <ErrorMessage className={css.error} name="address" component="div" />
                        </div>

                        <button className={css.btn_orange} type="submit" disabled={isSubmitting}>
                            Подтвердить
                        </button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}
export default BasketForm;
