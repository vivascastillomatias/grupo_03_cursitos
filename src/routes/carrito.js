var express = require('express');
var router = express.Router();
const carritoController = require('../controllers/carritoController')
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('carrito');
// });

//Get Administrar -> devolver pagina "Carrito"
router.get('/', carritoController.all)

//Get registro curso -> devolver pagina 
//Por ahora está de más
//router.get('/create/', carritoController.create)

//post registro -> registrar un nuevo curso
//Responde al "Agregar al carrito" que viene desde la vista de detalle
router.post('/create/:id', carritoController.store)

//PUT borrar un curso del carrito
router.delete('/:id', carritoController.delete)

//POST confirmar compra -> devolver pagina
router.post('/buy', carritoController.buy)

module.exports = router;