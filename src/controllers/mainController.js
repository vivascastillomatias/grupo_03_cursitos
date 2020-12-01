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
                    res.render('index',{title:"Home", courses: allCourses})
                } catch (error) {
                    console.log(error)
                }
        // * BASE DE DATOS EN JSON * //
        // const coursesFilePath = path.join(__dirname, '../data/coursesDataBase.json');
        // const courses = JSON.parse(fs.readFileSync(coursesFilePath, 'utf-8'));
        // res.render('index', {courses: courses, title:"Cursitos"})
    }
}