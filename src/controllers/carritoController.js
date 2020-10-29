const fs = require('fs');
const path = require('path');

const leerCarrito = () => {
    const carritoFilePath = path.join(__dirname, '../data/carritoDataBase.json');
    return JSON.parse(fs.readFileSync(carritoFilePath, 'utf-8'));
}
const leerCursos = () => {
	const coursesFilePath = path.join(__dirname, '../data/coursesDataBase.json');
    return JSON.parse(fs.readFileSync(coursesFilePath, 'utf-8'));
}

const grabarCarrito = (newCarrito) => {
    const carritoFilePath = path.join(__dirname, '../data/carritoDataBase.json');
    fs.writeFileSync(carritoFilePath, JSON.stringify(newCarrito))
}

module.exports = {
    all: (req, res) => {
        leerCarrito();
        console.log("se accedió al carrito")
        res.render('carrito', {courses: leerCarrito(), title: "Carrito"})
    },
    // create: (req, res) => {}  
    store: (req, res) => {
        leerCursos().forEach(course => {
            if(req.params.id == course.id){
            var newCourse = {
                    ...course
            }
            var newCarrito = [...leerCarrito(), newCourse]
            grabarCarrito(newCarrito)
            }
        });
        res.redirect('../')
       console.log('se agregó un curso al carrito') 
    } ,
    delete: (req, res) => {
        var newCarrito = leerCarrito().filter(carrito => 
            req.params.id != carrito.id)
        grabarCarrito(newCarrito)
        console.log('Se eliminó un producto y se redirecciono al carrito')
        res.redirect('/carrito')
    } ,
    buy: (req, res) => {
        console.log('Se compró')
        res.send('exito')
    } 
}

