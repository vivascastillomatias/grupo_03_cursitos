const fs = require('fs');
const path = require('path');
const { brotliDecompressSync } = require('zlib');
const { Course, Categorie, Sequelize } = require("../database/models/")
const session = require('express-session')

// const leerJson = () => {
// 	const coursesFilePath = path.join(__dirname, '../data/coursesDataBase.json');
//     return JSON.parse(fs.readFileSync(coursesFilePath, 'utf-8'));
// }

// const grabarJson = (newCourses) => {
//     const coursesFilePath = path.join(__dirname, '../data/coursesDataBase.json');
//     fs.writeFileSync(coursesFilePath, JSON.stringify(newCourses))
// }


module.exports = {
    all: async (req, res) => {
        // * BASE DE DATOS SQL * //
        try {
            const allCourses = await Course.findAll()
            res.render('course/list',{title:"Todos los cursos", courses: allCourses})
        } catch (error) {
            console.log(error)
        }
        console.log("Se accedió a todos los cursos")
        // * BASE DE DATOS JSON * //
        // const coursesFilePath = path.join(__dirname, '../data/coursesDataBase.json');
        // const courses = JSON.parse(fs.readFileSync(coursesFilePath, 'utf-8'));
        // res.render('course/list', {courses: courses, title:"Cursitos"})
        // console.log('Se accedió a la lista de los cursos')
    }, 
    detail: async (req, res) => {
        // * BASE DE DATOS SQL * //
        try {
            const courseDetail = await Course.findByPk(req.params.id)
            res.render('course/detail', {title:"Detalle de "+courseDetail.name, course: courseDetail})
        } catch (error) {
            console.log(error)
        }
        console.log('Se accedió al detalle de un curso')
        // * BASE DE DATOS JSON * //
        // const courses = leerJson();
        // let id = req.params.id
        // let course = courses.find(e => e.id == id)
        // console.log('redireccionado a detalle del producto seleccionado')
        // res.render('course/detail', {course, title:"Detalle de Curso"})
    
    },
    create: async (req, res) => {
        const category = await Categorie.findAll()
        res.render('course/create',{title:"Publica tu curso!", category: category})
    } ,
    store: async (req, res) => {
        // * BASE DE DATOS SQL * //
        try {
            let user = req.session.user
            const newCourse = await Course.create({
                name: req.body.name,
                short_description: req.body.short_description,
                description: req.body.description,
                category: req.body.category,
                price: req.body.price,
                discount: req.body.discount,
                link: req.body.link,
                owner: user.id            
            })
        let ruta = '/courses/'+req.body.id;
        console.log('Se creó un nuevo curso')
		res.redirect(ruta);
        } catch (error) {
            console.log(error)
        }
        

        // * BASE DE DATOS EN JSON * //
        // let courses = leerJson();
        // let fileName;
        // req.file ?  fileName = req.file.filename : fileName = ''
        // let id = courses[courses.length-1].id+1;
        // var newCourse = {
        //     id,
        //     image: fileName,
        //     ...req.body
        // }
        // var newCourses = [...courses, newCourse];
        // grabarJson(newCourses);
        // let ruta = '/courses/'+id;
		// res.redirect(ruta);
    } ,
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
        // * BASE DE DATOS EN JSON * //
        // let courses = leerJson();
        // var newCourses = courses.filter(courses => req.params.id != courses.id);
        
        // grabarJson(newCourses);
        // console.log('borrado y redireccionado a index')
        // res.redirect('/')
    } , 
    // deleteAndStay: (req, res) => {
    //     console.log('borrado y redireccionado a la misma pagina')
    //     res.send('acabas de borrar y te estoy reenviando a la vista general de cursos')
    // },
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
        // * BASE DE DATOS EN JSON * //
        // let courses = leerJson();
        // let id = req.params.id
        // let course = courses.find(e => e.id == id)
        // res.render('course/modify', {course, title:"Detalle de Curso "+id})
    },
    modify: async (req, res) => {
        // * BASE DE DATOS EN SQL * //
        console.log(req.params.id)
        try {
            let user = req.session.user;
            const updateCourse = await Course.update({
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
            
            let ruta = '../courses/'+req.params.id;
            res.redirect(ruta);
            console.log('Se modificó un curso')
        } catch (error){
            console.log(error)
        }

        // * BASE DE DATOS EN JSON * //
        // let courses = leerJson();
        // let id =req.params.id 
        // let index = courses.findIndex(e => e.id == id)
        // let fileName;
        // req.file ?  fileName = req.file.filename : fileName = courses[index].image;
        // let newCourse = { id, image: fileName, ...req.body};
        //  courses.splice(index, 1, newCourse);
        // grabarJson(courses);
    } 
}