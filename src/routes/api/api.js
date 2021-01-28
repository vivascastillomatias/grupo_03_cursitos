var express = require('express');
var router = express.Router();
const courseController = require('../../controllers/api/courseController')
const userController = require('../../controllers/api/userController')
const categoryController = require('../../controllers/api/categoryController')
const saleController = require('../../controllers/api/saleController')

router.get('/course', courseController.list);
router.get('/course/search/:id', courseController.searchById);
router.get('/course/last', courseController.last);

router.get('/user', userController.list);
router.get('/user/search/:id', userController.searchById);
router.get('/user/last', userController.last);


router.get('/categories', categoryController.list);

router.get('/sales', saleController.list5);
router.get('/sales/bestSale', saleController.bestSale);
router.get('/sales/bestBuyer', saleController.bestBuyer);

module.exports = router;