const fs = require('fs');
const path = require('path');
const carritoFilePath = path.join(__dirname, '../data/carritoDataBase.json');
const carrito = JSON.parse(fs.readFileSync(carritoFilePath, 'utf-8'));
const coursesFilePath = path.join(__dirname, '../data/coursesDataBase.json');
const courses = JSON.parse(fs.readFileSync(coursesFilePath, 'utf-8'));

module.exports = {
    all: (req, res) => {
        console.log("se accedió al carrito")
        res.render('carrito', {courses: carrito})
    },
    create: (req, res) => {
        res.send('te estoy mandando a la vista de creacion de cursos')
    } ,
    store: (req, res) => {
       res.send('te estoy mandando a la vista de confirmar creacion de cursos') 
    } ,
    delete: (req, res) => {
        console.log('Se eliminó un producto y se redirecciono al carrito')
        res.redirect('../carrito')
    } ,
    buy: (req, res) => {
        console.log('Se compró')
        res.send('exito')
    } 
}

