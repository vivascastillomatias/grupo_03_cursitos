const fs = require('fs');
const path = require('path');
const carritoFilePath = path.join(__dirname, '../data/carritoDataBase.json');
const carrito = JSON.parse(fs.readFileSync(carritoFilePath, 'utf-8'));
const coursesFilePath = path.join(__dirname, '../data/coursesDataBase.json');
const courses = JSON.parse(fs.readFileSync(coursesFilePath, 'utf-8'));

module.exports = {
    all: (req, res) => {
        const carritoFilePath = path.join(__dirname, '../data/carritoDataBase.json');
        const carrito = JSON.parse(fs.readFileSync(carritoFilePath, 'utf-8'));


        console.log("se accedió al carrito")
        res.render('carrito', {courses: carrito})
    },
    create: (req, res) => {

    } ,
    store: (req, res) => {
        courses.forEach(course => {
            if(req.params.id == course.id){
            var newCourse = {
                    ...course
            }
            var newCarrito = [...carrito, newCourse]
            fs.writeFileSync(carritoFilePath, JSON.stringify(newCarrito))
            }
        });
        res.redirect('../')
       console.log('se agregó un curso al carrito') 
    } ,
    delete: (req, res) => {
        var newCarrito = carrito.filter(carrito => 
            req.params.id != carrito.id)
        fs.writeFileSync(carritoFilePath, JSON.stringify(newCarrito))
        console.log('Se eliminó un producto y se redirecciono al carrito')
        res.redirect('/carrito')
    } ,
    buy: (req, res) => {
        console.log('Se compró')
        res.send('exito')
    } 
}

