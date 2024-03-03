import * as Yup from 'yup';

const BasketFormValidation = Yup.object().shape({
    address: Yup.string()
        .min(3, 'Необходимо указать корректный адрес доставки')
        .required('Необходимо указать адрес доставки'),
    name: Yup.string()
        .min(3, 'Длина имени не должна быть менее 3х символов')
        .max(20, 'Длина имени не должна быть бонее 20х символов')
        .required('Необходимо указать имя'),
    phone: Yup.string()
        .matches(/^[0-9]+$/, 'Необходимо указать корректный номер телефона')
        .min(11, 'Номер должен состоять из 11 цифр')
        .max(11, 'Номер должен состоять из 11 цифр')
        .required('Необходимо указать номер телефона'),
});

export default BasketFormValidation;
