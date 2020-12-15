const { body, validationResult } = require('express-validator');
module.exports = {
    createCourse: [
        body('name')
            .notEmpty()
            .withMessage('El curso debe tener un nombre')
            .bail()
            .isLength({max: 100})
            .withMessage('El nombre no puede tener más de 100 caracteres'),
        body('description')
            .notEmpty()
            .withMessage('El curso debe tener una descripción')
            .isLength({max:500})
            .withMessage('La descripción no puede tener mas de 500 caracteres'),
        body('category')
            .notEmpty()
            .withMessage('Debes seleccionar una categoría'),
        body('price')
            .notEmpty()
            .withMessage('Debes insertar un precio')
            .bail()
            .isInt({max:9999999999})
            .withMessage('El máximo es de 9999999999.'),
        body('image')
            .notEmpty()
            .withMessage('El curso debe tener una imagen')
    ]
}