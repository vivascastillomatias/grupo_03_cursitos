var express = require('express');
var router = express.Router();
const courseController = require('../../controllers/api/courseController')
const userController = require('../../controllers/api/userController')

router.get('/course', courseController.list);
router.get('/course/search/:id', courseController.searchById);
router.get('/course/last', courseController.last);

router.get('/user', userController.list);
router.get('/user/search/:id', userController.searchById);
router.get('/user/last', userController.last);

module.exports = router;