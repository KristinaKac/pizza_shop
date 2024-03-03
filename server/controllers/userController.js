const ApiError = require("../error/ApiError");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Basket } = require('../models/models');

const generateJwt = (id, email, role, name) => {
    return jwt.sign(
        { id, email, role, name },
        // секретный ключ (может быть любой)
        process.env.SECRET_KEY,
        // сколько времени будет жить токен - в целях безопасности всего 24 часа
        { expiresIn: '24h' }
    )
}

class UserController {
    async registration(req, res, next) {
        console.log(req)
        const { name, email, password, role } = req.body;
        if (!email || !password || !name) {
            return next(ApiError.badRequest('Некорректный email или password'));
        }
        const candidate = await User.findOne({ where: { email } });
        if (candidate) {
            return next(ApiError.badRequest('Пользователь c таким email уже существует'));
        }
        // хэшируем пароль (зашифровываем его)
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({ name, email, password: hashPassword, role });
        // сразу создаем новому пользователю корзину
        const basket = await Basket.create({ userId: user.id });
        // генерируем пользователю json web токен
        const token = generateJwt(user.id, user.email, user.role, user.name);

        return res.json({ token });
    }
    async login(req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'));
        }
        const comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Пароль указан неверно'));
        }
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token });
    }
    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.password);
        res.json({ token });
    }
}

module.exports = new UserController()