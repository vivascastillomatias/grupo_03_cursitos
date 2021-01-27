var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const courseController = require('../controllers/courseController')
const session = require('express-session');
const { nextTick } = require('process');
const logged = require('../middlewares/route/logged')
const validator = require('../middlewares/route/courseValidator');
   
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
router.get('/', courseController.all)

//Get registro curso -> devolver pagina
router.get('/create', logged, courseController.create)

//post registro -> registrar un nuevo curso
// router.post('/', logged, upload.single('image'), validator.validator, courseController.store)
router.post('/', logged, upload.single('image'), courseController.store)

//Get Ver detalle de curso
router.get('/:id', courseController.detail)

//POST buscar curso
router.post('/search', courseController.search)

//Get borrar un curso -> devolver pagina
router.delete('/delete/:id', logged, courseController.delete)

//delete borrar -> borrar un curso
// router.delete('/:id', courseController.deleteAndStay)

//Get modificar un curso -> devolver pagina
router.get('/:id/edit', logged, courseController.modifyView)

//PUT modificar -> modificar un curso
// router.put('/:id', logged, validator.validator, upload.single('image'), courseController.modify)
router.put('/:id', logged, upload.single('image'), courseController.modify)

module.exports = router;
