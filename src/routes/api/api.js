var express = require('express');
var router = express.Router();
const courseController = require('../../controllers/api/courseController')

router.get('/course', courseController.list);

module.exports = router;