const { body, validationResult  } = require('express-validator');


module.exports = {
    validator: [
    body('name')
        .isLength({min:10,max:50})
        .withMessage('El nombre debe tener un minimo de 10 y máximo de 50 caracteres.'),
    body('description')
        .isLength({min:10,max:1200})
        .withMessage('La descripción debe tener un mínimo de 10 y un máximo de 1200 caracteres.'),
    body('category')
        .notEmpty()
        .withMessage('Debes seleccionar una categoría.'),
    body('price')
        .notEmpty()
        .withMessage('Debes ingresar un precio.')
    
   
]}