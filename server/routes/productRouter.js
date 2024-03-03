const Router = require('express');
const router = new Router();
const ProductController = require('../controllers/productController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');


router.post('/', checkRoleMiddleware('ADMIN'), ProductController.create);
router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getOne);

module.exports = router;