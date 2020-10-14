var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/signin', function(req, res, next) {
  res.render('signin');
});


//Get inicio sesion -> devolver pagina
//post inicio sesion -> validar entrada

//Get registro -> devolver pagina
//post registro -> registrar un nuevo usuario

//Get Administrar mi perfil -> devolver pagina


//PUT modificar datos -> borrar un usuario

//delete borrar -> darse de baja

module.exports = router;
