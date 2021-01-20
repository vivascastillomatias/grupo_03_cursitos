var express = require('express');
var router = express.Router();
const courseController = require('../../controllers/api/courseController')
const userController = require('../../controllers/api/userController')

router.get('/course', courseController.list);
router.get('/course/:id', courseController.searchById);


router.get('/user', userController.list);
router.get('/user/:id', userController.searchById);

module.exports = router;