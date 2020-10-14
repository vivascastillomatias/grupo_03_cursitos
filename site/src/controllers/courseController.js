const fs = require('fs');

//let db = JSON.parse(fs.readFileSync('ruta de archivo js con cursos creados por el usuario', 'utf-8'));

module.exports = {
    all: (req, res) => {
        res.send('estas viendo todos los articulos del carrito del generador')
    },
    create: (req, res) => {
        res.send('estas viendo la vista de creacion de cursos')
    } ,
    store: (req, res) => {
       res.send('creaste un cursos') 
    } ,
    delete: (req, res) => {
        res.send('estas borrando un articulo del carrito general')
    } , 
    deleteAndStay: (req, res) => {
        res.send('acabas de borrar y te estoy reenviando a la vista general de cursos')
    },
    modifyView: (req, res) => {
        res.send('estas viendo la vista de modificacion de curso')
    },
    modify: (req, res) => {
        res.send('modificaste un curso')
    } 
}