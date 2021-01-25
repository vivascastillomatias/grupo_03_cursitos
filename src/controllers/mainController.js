const fs = require('fs');
const path = require('path');
const { Course } = require("../database/models/")
const session = require('express-session')
// const coursesFilePath = path.join(__dirname, '../data/coursesDataBase.json');
// const courses = JSON.parse(fs.readFileSync(coursesFilePath, 'utf-8'));

module.exports = {
    all: async (req, res)=>{
        // * BASE DE DATOS EN SQL * //
                try {
                    const allCourses = await Course.findAll()
                    allCourses.forEach(course => {
                        
                    });
                    let myCourses = [];
                    let courses = [];
                    if (req.session.user) {
                        myCourses = allCourses.filter(course => course.owner == req.session.user.id);
                        courses = allCourses.filter(course => course.owner != req.session.user.id);
                    }else{
                        courses = allCourses;
                    }
                    res.render('index',{title:"Home", courses, myCourses })
                } catch (error) {
                    console.log(error)
                }
        // * BASE DE DATOS EN JSON * //
        // const coursesFilePath = path.join(__dirname, '../data/coursesDataBase.json');
        // const courses = JSON.parse(fs.readFileSync(coursesFilePath, 'utf-8'));
        // res.render('index', {courses: courses, title:"Cursitos"})
    },
    myCourses:async (req, res)=>{
        // * BASE DE DATOS EN SQL * //
        try {
            const results = await Course.findAll({
                where: {
                    owner: req.session.user.id
                }
            })
            res.render('index',{title:"Home", courses: results})
        } catch (error) {
            console.log(error)
        }
    }
}