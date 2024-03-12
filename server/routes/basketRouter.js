const Router = require('express');
const router = new Router();
const BasketController = require('../controllers/basketController');
const authMiddleware = require('../middleware/authMiddleware');


router.get('/', authMiddleware, BasketController.getBasket);
router.get('/products', authMiddleware, BasketController.getAllProductsFromBasket);
router.post('/', authMiddleware, BasketController.addProduct);
router.delete('/:id', authMiddleware, BasketController.removeProduct);
router.post('/decrease', authMiddleware, BasketController.decreaseCountProduct);
router.post('/increase', authMiddleware, BasketController.increaseCountProduct);

module.exports = router;