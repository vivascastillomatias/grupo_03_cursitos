var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('detailCourse');
});



//Get Administrar cursos -> devolver pagina "ver mis cursos"

//Get registro curso -> devolver pagina
//post registro -> registrar un nuevo curso

//Get borrar un curso -> devolver pagina
//delete borrar -> borrar un curso

//Get modificar un curso -> devolver pagina
//PUT modificar -> modificar un usuario
module.exports = router;
