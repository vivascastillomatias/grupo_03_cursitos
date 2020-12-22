const { body, validationResult  } = require('express-validator');


module.exports = {
    login: [
        body('email')
        .isEmail()
        .withMessage('Debes ingresar un Email válido.'),
        body('password')
        .notEmpty()
        .withMessage('Debes ingresar una contraseña.')
    ],
    signin: [
    body('email')
        .isEmail()
        .withMessage('Debes ingresar un Email válido.'),
    body('name')
        .isLength({min:1,max:1200})
        .withMessage('El nombre de usuario debe tener un mínimo de 1 y un máximo de 30 caracteres.'),
    body('password')
        .notEmpty()
        .withMessage('Debes ingresar una contraseña.'),
    body('passwordRepeat')
        .notEmpty()
        .withMessage('Debes ingresar nuevamente la contraseña.')
   
]}