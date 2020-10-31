var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const userController = require('../controllers/userController')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/users'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })

//Iniciar sesion
router.get('/login', userController.loginView)

router.post('/login', userController.processLogin);

//Registrarse
router.get('/signin', userController.registerView) 

router.post('/signin', userController.processRegister)

//Completar registro
router.get('/completeUser/:id', userController.completeUserView) 

router.post('/completeUser/:id',upload.single('image'), userController.completeUser)

//Modificar usuario
router.get('/modify/:id', userController.modifyView) 

router.post('/modify/:id',upload.single('image'), userController.modify)


router.post('/logout', userController.logout) 

//Get Administrar mi perfil -> devolver pagina

//PUT modificar datos -> borrar un usuario

//delete borrar -> darse de baja

module.exports = router;
