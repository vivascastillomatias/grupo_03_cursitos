var express = require('express');
var router = express.Router();
const courseController = require('../../controllers/api/courseController')
const userController = require('../../controllers/api/userController')

router.get('/course', courseController.list);


router.get('/user/list', userController.list);
router.get('/user/search/:id', userController.searchById);

module.exports = router;