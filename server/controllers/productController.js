const uuid = require('uuid');
const path = require('path');
const { Product, ProductInfo } = require('../models/models');
const ApiError = require('../error/ApiError');


class ProductController {
    async create(req, res, next) {
        try {
            let { name, price, typeId, info } = req.body;
            const { img } = req.files;
            let fileName = uuid.v4() + ".jpg";
            // переместить полученный файл с клиента в папку static
            // dirname это путь до текущей папки с контроллерами
            // две точки, чтобы вернуться на дерикторию назад
            // static, чтобы попасть в папку статик
            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const product = await Product.create({ name, price, typeId, img: fileName });

            if (info) {
                info = JSON.parse(info);
                info.forEach(i => {
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id
                    });
                });
            }
            return res.json(product);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    async getAll(req, res) {
        let { typeId, limit, page } = req.query;

        page = page || 1;
        limit = limit || 9;

        let offset = page * limit - limit;

        let product;
        if (!typeId) {
            product = await Product.findAndCountAll({ limit, offset });
        }
        if (typeId) {
            product = await Product.findAndCountAll({ where: { typeId }, limit, offset })
        }
        return res.json(product);
    }
    async getOne(req, res) {
        const { id } = req.params;
        const product = await Product.findOne(
            {
                where: { id },
                include: [{ model: ProductInfo, as: 'info' }]
            },
        )
        return res.json(product);
    }
}

module.exports = new ProductController()