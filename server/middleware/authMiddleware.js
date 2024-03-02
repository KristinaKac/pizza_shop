const jws = require('jsonwebtoken');
const ApiError = require('../error/ApiError');

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]; // Baerer klhdjashfiuwfjk
        if (!token) {
            return res.status(401).json({ message: 'Не авторизован' });
        }
        const decoded = jws.verify(token, process.env.SECRET_KEY);
        req.user = decoded;

        // чтобы следующий в цепочке вызов произошел в userRouter
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Не авторизован' });
    }
}