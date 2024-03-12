const uuid = require('uuid');
const path = require('path');
const { Basket, BasketProduct } = require('../models/models');
const ApiError = require('../error/ApiError');


class BasketController {
    async getBasket(req, res, next) {
        let userId = req.user.id;
        const basket = await Basket.findOne({ where: { userId } });
        return res.json(basket);
    }
    async addProduct(req, res, next) {
        let userId = req.user.id;
        let productId = req.body.id;

        const basket = await Basket.findOne({ where: { userId } });
        const basketId = basket.id;

        const basketProduct = await BasketProduct.create({ basketId, productId });
        return res.json(basketProduct);
    }
    async removeProduct(req, res, next) {
        let userId = req.user.id;
        let productId = req.params.id;

        if (!productId) {
            return next(ApiError.internal('Неккоректный id'));
        }

        const basket = await Basket.findOne({ where: { userId } });
        const basketId = basket.id;

        const basketProduct = await BasketProduct.destroy({
            where: {
                basketId,
                productId
            }
        });

        return res.json(basketProduct);
    }
    async getAllProductsFromBasket(req, res, next) {
        let userId = req.user.id;

        const basket = await Basket.findOne({ where: { userId } });
        if (!basket) {
            return
        }
        const basketId = basket.id;

        const productsId = await BasketProduct.findAndCountAll({ basketId });

        return res.json(productsId);
    }
    async decreaseCountProduct(req, res, next) {
        let userId = req.user.id;
        let productId = req.body.id;

        if (!productId) {
            return next(ApiError.internal('Неккоректный id'));
        }

        const basket = await Basket.findOne({ where: { userId } });
        const basketId = basket.id;

        const basketProduct = await BasketProduct.findOne({
            where: {
                basketId,
                productId
            }
        });
        await basketProduct.destroy();

        return res.json(basketProduct);
    }
    async increaseCountProduct(req, res, next) {
        let userId = req.user.id;
        let productId = req.body.id;

        if (!productId) {
            return next(ApiError.internal('Неккоректный id'));
        }

        const basket = await Basket.findOne({ where: { userId } });
        const basketId = basket.id;

        const basketProduct = await BasketProduct.create({ basketId, productId });

        return res.json(basketProduct);
    }
}

module.exports = new BasketController()