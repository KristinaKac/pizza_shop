const Router = require('express');
const router = new Router();
const BasketController = require('../controllers/basketController');
// const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');
const authMiddleware = require('../middleware/authMiddleware');


// router.post('/', checkRoleMiddleware('ADMIN'), ProductController.create);
// router.get('/', ProductController.getAll);
// router.get('/:id', ProductController.getOne);

router.get('/', authMiddleware, BasketController.getBasket);
router.get('/products', authMiddleware, BasketController.getAllProductsFromBasket);
router.post('/', authMiddleware, BasketController.addProduct);

module.exports = router;