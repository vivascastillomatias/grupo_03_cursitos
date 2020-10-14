var express = require('express');
var router = express.Router();
const courseController = require('../controllers/courseController')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('detailCourse');
});


//Get Administrar cursos -> devolver pagina "ver mis cursos"
router.get('/all', courseController.all)

//Get registro curso -> devolver pagina
router.get('/create', courseController.create)

//post registro -> registrar un nuevo curso
router.post('/create', courseController.store)

//Get borrar un curso -> devolver pagina
router.delete('/detail/:id', courseController.delete)

//delete borrar -> borrar un curso
router.delete('/detail/:id', courseController.deleteAndStay)

//Get modificar un curso -> devolver pagina
router.get('/modify/:id', courseController.modifyView)

//PUT modificar -> modificar un usuario
router.put('/modify/:id/', courseController.modify)
module.exports = router;
