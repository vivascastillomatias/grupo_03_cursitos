const fs = require('fs');
const path = require('path');
const { brotliDecompressSync } = require('zlib');



const leerJson = () => {
	const coursesFilePath = path.join(__dirname, '../data/coursesDataBase.json');
    return JSON.parse(fs.readFileSync(coursesFilePath, 'utf-8'));
}

const grabarJson = (newCourses) => {
    const coursesFilePath = path.join(__dirname, '../data/coursesDataBase.json');
    fs.writeFileSync(coursesFilePath, JSON.stringify(newCourses))
}


module.exports = {
    all: (req, res) => {
        res.send('estas viendo todos los articulos del carrito del generador')
    }, 
    detail: (req, res) => {

    const courses = leerJson();
    let id = req.params.id

    let course = courses.find(e => e.id == id)

    console.log('redireccionado a detalle del producto seleccionado')
    res.render('course/detail', {course})
    },
    create: (req, res) => {
        res.render('course/create')
    } ,
    store: (req, res) => {
        let courses = leerJson();
        var newCourse = {
            "id": (courses[courses.length-1].id+1),
            ...req.body
        }
        var newCourses = [...courses, newCourse]
        console.log(newCourses)
        grabarJson(newCourses);
       res.redirect('/') 
    } ,
    delete: (req, res) => {
        let courses = leerJson();
        var newCourses = courses.filter(courses => req.params.id != courses.id);
        
        grabarJson(newCourses);
        console.log('borrado y redireccionado a index')
        res.redirect('/')
    } , 
    deleteAndStay: (req, res) => {
        console.log('borrado y redireccionado a la misma pagina')
        res.send('acabas de borrar y te estoy reenviando a la vista general de cursos')
    },
    modifyView: (req, res) => {
        // res.send('estas viendo la vista de modificacion de curso')
        let courses = leerJson();
        let id = req.params.id
        let course = courses.find(e => e.id == id)
        console.log('acceso a la vista de modificaciones')
        res.render('course/modify', {course})
    },
    modify: (req, res) => {
        let courses = leerJson();
        let id =req.params.id

        let newCourse = { id, ...req.body};
        let index = courses.findIndex(e => e.id == id)
        courses.splice(index, 1, newCourse);
        grabarJson(courses);
        let ruta = '/courses/detail/'+id;
		res.redirect(ruta);
    } 
}