import * as Yup from 'yup';

const LoginFormValidation = Yup.object().shape({
    email: Yup.string().email('Неккоректная почта').required('Необходимо указать почту'),
    password: Yup.string()
        .min(3, 'Длина пароля не должна быть менее 3х символов')
        .max(30, 'Длина пароля не должна быть более 30х символов')
        .required('Необходимо указать пароль'),
});

export default LoginFormValidation;