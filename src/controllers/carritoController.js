const fs = require('fs');
const path = require('path');
const { Course, Sequelize } = require("../database/models/")
const Op = Sequelize.Op

module.exports = {
    all: async (req, res) => {

        if (req.session.cart) {
            let carro = req.session.cart
            console.log('CAAAAAAARRRRRRRRROOOO:  '+carro)
            let results = await Course.findAll({
                where: {
                    id: carro
                }
            })
            res.render('carrito',{title:"Cart", courses: results})
        }else{
            let courses = []
            res.render('carrito',{title:"Cart", courses})

        }
    },
    // create: (req, res) => {}  
    store: (req, res) => {
        if (req.session.cart) {
            let carro = req.session.cart;
            if (carro.indexOf(req.params.id) == -1) {
                carro.push(req.params.id)
                req.session.cart = carro;
            }
        } else {
            req.session.cart = [req.params.id]
        }
        res.redirect('/courses')
    } ,
    delete: (req, res) => {
        if (req.session.cart) {
            let carro = req.session.cart;
            let index = carro.indexOf(req.params.id)
            if (index >= 0) {
                carro.splice(index,1);
            }
        }
        res.redirect('/cart')
    } ,
    buy: (req, res) => {
    } 
}

