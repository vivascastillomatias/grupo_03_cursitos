var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

/* GET users listing. */

router.get('/login', userController.loginView)

router.post('/login', userController.processLogin);

router.get('/signin', userController.registerView) 

router.post('/signin', userController.processRegister)

//Get Administrar mi perfil -> devolver pagina

//PUT modificar datos -> borrar un usuario

//delete borrar -> darse de baja

module.exports = router;
