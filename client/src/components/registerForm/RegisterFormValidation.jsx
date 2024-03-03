import * as Yup from 'yup';

const RegisterFormValidation = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Длина имени не должна быть менее 3х символов')
        .max(20, 'Длина имени не должна быть бонее 20х символов')
        .required('Необходимо указать имя'),
    email: Yup.string().email('Неккоректная почта').required('Необходимо указать почту'),
    password: Yup.string()
        .min(3, 'Длина пароля не должна быть менее 3х символов')
        .max(30, 'Длина пароля не должна быть более 30х символов')
        .required('Необходимо указать пароль'),
});

export default RegisterFormValidation;