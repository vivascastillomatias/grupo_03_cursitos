var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const courseController = require('../controllers/courseController')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images/products'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })

//Get Administrar cursos -> devolver pagina "ver mis cursos"
router.get('/all', courseController.all)

//Get registro curso -> devolver pagina
router.get('/create', courseController.create)

//post registro -> registrar un nuevo curso
router.post('/create/',upload.single('image'), courseController.store)

//Get Ver detalle de curso
router.get('/detail/:id', courseController.detail)

//Get borrar un curso -> devolver pagina
router.delete('/delete/:id', courseController.delete)

//delete borrar -> borrar un curso
router.delete('/detail/:id', courseController.deleteAndStay)

//Get modificar un curso -> devolver pagina
router.get('/detail/modify/:id', courseController.modifyView)

//PUT modificar -> modificar un usuario
router.put('/detail/modify/:id',upload.single('image'), courseController.modify)

module.exports = router;
