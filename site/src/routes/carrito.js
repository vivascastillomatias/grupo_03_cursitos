var express = require('express');
var router = express.Router();
const carritoController = require('../controllers/carritoController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('carrito');
});

//Get Administrar -> devolver pagina "Carrito"
router.get('/all', carritoController.all)

//Get registro curso -> devolver pagina 
//¿Enviar a la vista de creacion de cursos o simplemente borrar?
router.get('/create', carritoController.create)

//post registro -> registrar un nuevo curso
//Cade de maduro con la pregunta de arriba
router.post('/create', carritoController.store)

//PUT borrar un curso del carrito
router.delete('/detail/:id', carritoController.delete)

//POST confirmar compra -> devolver pagina
router.post('/buy', carritoController.buy)

module.exports = router;