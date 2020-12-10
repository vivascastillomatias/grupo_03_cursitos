const fs = require('fs');
const path = require('path');

module.exports = {
    list: (req, res) => {
        leerCarrito();
        console.log("se accedió al carrito")
        res.render('carrito', {courses: leerCarrito(), title: "Carrito"})
    }
}