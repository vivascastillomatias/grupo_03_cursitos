const fs = require('fs');

//let db = JSON.parse(fs.readFileSync('ruta de archivo js con datos de cursos a comprar', 'utf-8'));

module.exports = {
    all: (req, res) => {
        res.send('estas viendo todos los articulos del carrito del consumidor')
    },
    create: (req, res) => {
        res.send('te estoy mandando a la vista de creacion de cursos')
    } ,
    store: (req, res) => {
       res.send('te estoy mandando a la vista de confirmar creacion de cursos') 
    } ,
    delete: (req, res) => {
        res.send('estas borrando un articulo del carrito del consumidor')
    } ,
    buy: (req, res) => {
        res.send('estas comprando todo el carrito')
    } 
}

