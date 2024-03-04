const jws = require('jsonwebtoken');
const ApiError = require('../error/ApiError');

module.exports = function (role) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]; // Baerer klhdjashfiuwfjk
            if (!token) {
                return res.status(401).json({ message: 'Не авторизован' });
            }
            const decoded = jws.verify(token, process.env.SECRET_KEY);
            console.log(decoded)
            if(decoded.role !== role) {
                return res.status(401).json({ message: 'Нет доступа' });
            }
            req.user = decoded;

            // чтобы следующий в цепочке вызов произошел в userRouter
            next();
        } catch (error) {
            return res.status(401).json({ message: 'Не авторизован' });
        }
    }
}