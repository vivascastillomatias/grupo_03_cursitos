var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('carrito');
});



//Get Administrar -> devolver pagina "Carrito"

//Get registro curso -> devolver pagina
//post registro -> registrar un nuevo curso

//PUT borrar un curso del carrito

//POST confirmar compra -> devolver pagina

//PUT modificar -> modificar un usuario
module.exports = router;
