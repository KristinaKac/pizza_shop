require('dotenv').config();

const express = require('express');
const fileUpload = require('express-fileupload');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors')
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

// чтобы браузер мог связываться с сервером
app.use(cors());
// указываем, что файлы в папке ststic должны восприниматься как статика
app.use(express.static(path.resolve(__dirname, 'static')));
// чтобы приложение могло парсить json формат
app.use(express.json());
// для работы с файлами
app.use(fileUpload({}))

app.use('/api', router);
// errorHandler всегда должен быть последним
app.use(errorHandler)


// app.get('/', (req, res) => {
//     res.status(200).json({message: "Working!!!"})
// })

const start = async () => {
    try {
        // устанавливаем подключение к базе данных
        await sequelize.authenticate();
        // сверяет состояние бд со схемой данных
        await sequelize.sync();

        app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start();

module.exports = router;


