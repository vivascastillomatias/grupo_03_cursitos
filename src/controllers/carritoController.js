const fs = require('fs');
const path = require('path');
const { Course, Sale, Sequelize } = require("../database/models/")
const Op = Sequelize.Op

module.exports = {
    all: async (req, res) => {

        if (req.session.cart) {
            let carro = req.session.cart;
            let userId = [];
            if(req.session.user) {
                userId = [req.session.user.id]
            }
            console.log('SESSION:'+ userId)
            let results = await Course.findAll({
                where: {
                    id: carro,
                    owner:{ [Op.notIn]: userId}
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
    buy: async (req, res) => {
        let carro = req.session.cart;
        let userId = [];
        if(req.session.user) {
            userId = [req.session.user.id]
        }
        let results = await Course.findAll({
            where: {
                id: carro,
                owner:{ [Op.notIn]: userId}
            }
        })
        
        if (results.length > 0) {
            results.map(async c => {
                price = (c.price)-((c.price)*(c.discount))/100
                await Sale.create({
                    user_id: userId,
                    course_id: c.id,
                    price,
                })
            })
        }

        req.session.cart = [];
        res.redirect('/') //Debe ir a "Mis cursos"
    } 
}

