const fs = require('fs');
const path = require('path');
const coursesFilePath = path.join(__dirname, '../data/coursesDataBase.json');
const courses = JSON.parse(fs.readFileSync(coursesFilePath, 'utf-8'));

module.exports = {
    all: (req, res) => {
        res.send('estas viendo todos los articulos del carrito del generador')
    }, 
    detail: (req, res) => {
    let id = req.params.id
    console.log('redireccionado a detalle del producto seleccionado')
    res.render('course/detail', {id, courses})
    },
    create: (req, res) => {
        res.render('course/create')
    } ,
    store: (req, res) => {
       res.send('creaste un cursos') 
    } ,
    delete: (req, res) => {
        console.log('borrado y redireccionado a index')
        res.redirect('../../')
    } , 
    deleteAndStay: (req, res) => {
        console.log('borrado y redireccionado a la misma pagina')
        res.send('acabas de borrar y te estoy reenviando a la vista general de cursos')
    },
    modifyView: (req, res) => {
        // res.send('estas viendo la vista de modificacion de curso')
        let id = req.params.id
        console.log('acceso a la vista de modificaciones')
        res.render('course/modify', {id, courses})
    },
    modify: (req, res) => {
        console.log('modificado y redireccionando a index')
        res.redirect("../../..")
    } 
}