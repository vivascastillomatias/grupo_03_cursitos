const fs = require('fs');
const path = require('path');
const { brotliDecompressSync } = require('zlib');
const { Sale, Course, Categorie, Sequelize } = require("../database/models/")
const Op = Sequelize.Op
const session = require('express-session')
const { validationResult  } = require('express-validator');

module.exports = {
    all: async (req, res) => {
        // * BASE DE DATOS SQL * //
        try {
            const allCourses = await Course.findAll()

            if (req.session.user) {
                courses = allCourses.filter(course => course.owner != req.session.user.id);
            }else{
                courses = allCourses;
            }

            res.render('course/list',{title:"Todos los cursos", courses})
        } catch (error) {
            console.log(error)
        }
        console.log("Se accedió a todos los cursos")
    },
    search: async (req,res) => {
        try {
            const search = await Course.findAll({
                where: {
                    name: { [Op.like]: '%'+req.body.search+'%'  }
                },
                order: ['name']
            }) 
            console.log(search)

            res.render('course/list',{title:"Resultado de la Búsqueda", courses: search})

        } catch (error) {
            console.log(error)
        }
        console.log("Se realizó una búsqueda")
    } ,
    detail: async (req, res) => {
        // * BASE DE DATOS SQL * //
        try {
            // const courseDetail = await Course.findByPk(req.params.id)
            const courseDetail = await Course.findByPk(req.params.id, {
                include: ['categoryCourse']
               });
            let owner = false;
            let obtained = false;
            if (req.session.user) {
                owner = courseDetail.owner == req.session.user.id;
                let resultQuery = await Sale.findOne({
                    where: {
                        [Op.and]: [ {user_id: req.session.user.id}, {course_id: courseDetail.id}]
                    }
                })
                resultQuery ? obtained = true : obtained = false;
            }
            let toBuy = false;
            if (req.session.cart) {
                let carro = req.session.cart;
                if (carro.indexOf(req.params.id)>=0) {
                    toBuy = true;
                }
            }
            // res.send({title:"Detalle de "+courseDetail.name, course: courseDetail, owner, obtained})
            res.render('course/detail', {title:"Detalle de "+courseDetail.name, course: courseDetail, owner, obtained, toBuy})
            console.log('Se accedió al detalle de un curso')
        } catch (error) {
            console.log(error)
        }
    
    },
    create: async (req, res) => {
        try {
        const category = await Categorie.findAll()
        res.render('course/create',{title:"Publica tu curso!", category: category})
        } catch (error){
            console.log(error);
        }
    },
    store: async (req, res, next) => {
        // * BASE DE DATOS SQL * //
        let errors = validationResult(req)

        if(errors.isEmpty()){
        try {
            let fileName;
            req.file ?  fileName = req.file.filename : fileName = ''
            const newCourse = await Course.create({
                name: req.body.name,
                short_description: req.body.short_description,
                description: req.body.description,
                category: req.body.category,
                price: req.body.price,
                discount: req.body.discount,
                link: req.body.link,
                image: fileName,
                owner: req.session.user.id           
            })
        let ruta = '/courses/'+newCourse.id;
        console.log('Se creó un nuevo curso')
        res.redirect(ruta);
        }  
         catch (error) {
            console.log(error)
        } 
    } else {
        try {
        const category = await Categorie.findAll()
        console.log(errors.errors)
        res.render('course/create', {title:"Publica tu curso!", errors: errors.errors, category: category});
            
        } 
        catch (error){
            console.log(error);
        }
    }
    },
    delete: async (req, res) => {
        // * BASE DE DATOS EN SQL * //
            try {
                await Course.destroy({
                    where: { 
                        id: req.params.id 
                    }
                })
            res.redirect('/')
        } catch (error) { console.log(error) }
    } ,
    modifyView: async (req, res) => {
        // * BASE DE DATOS EN SQL * //
        try {
        const courseUpdate = await Course.findByPk(req.params.id)
        const categorie = await Categorie.findAll()
        res.render('course/modify', {title:"Modificar", course: courseUpdate, category: categorie})        
        } catch (error){
            console.log(error)
        }
        console.log('Se accedió a la vista de modificación de curso')
    },
    modify: async (req, res, next) => {
        // * BASE DE DATOS EN SQL * //
        let errors = validationResult(req)

        if(errors.isEmpty()){
        console.log(req.params.id)
        try {
            let fileName;
            if (req.file) {
                await Course.update({
                    name: req.body.name,
                    short_description: req.body.short_description,
                    description: req.body.description,
                    category: req.body.category,
                    price: req.body.price,
                    discount: req.body.discount,
                    link: req.body.link,
                    image: req.file.filename,
                },
                {
                    where: {
                        id: req.params.id
                    }
                }) 
            } else {
                await Course.update({
                    name: req.body.name,
                    short_description: req.body.short_description,
                    description: req.body.description,
                    category: req.body.category,
                    price: req.body.price,
                    discount: req.body.discount,
                    link: req.body.link,
                },
                {
                    where: {
                        id: req.params.id
                    }
                }) 
            }
            let ruta = '../courses/'+req.params.id;
            res.redirect(ruta);
            console.log('Se modificó un curso')
        } catch (error){
            console.log(error)
        }
    } else {
        try {
            const courseUpdate = await Course.findByPk(req.params.id)
            const categorie = await Categorie.findAll()
            res.render('course/modify', {title:"Modificar", course: courseUpdate, category: categorie, errors: errors.errors})        

        } catch(error){
            console.log(error);
        }
    }
    } 
}