var express = require('express');
var router = express.Router();
const courseController = require('../controllers/courseController')


//Get Administrar cursos -> devolver pagina "ver mis cursos"
router.get('/all', courseController.all)

//Get registro curso -> devolver pagina
router.get('/create', courseController.create)

//post registro -> registrar un nuevo curso
router.post('/create/', courseController.store)

//Get Ver detalle de curso
router.get('/detail/:id', courseController.detail)

//Get borrar un curso -> devolver pagina
router.delete('/delete/:id', courseController.delete)

//delete borrar -> borrar un curso
router.delete('/detail/:id', courseController.deleteAndStay)

//Get modificar un curso -> devolver pagina
router.get('/detail/modify/:id', courseController.modifyView)

//PUT modificar -> modificar un usuario
router.put('/detail/modify/:id', courseController.modify)

module.exports = router;
