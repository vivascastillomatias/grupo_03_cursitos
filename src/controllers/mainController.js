const fs = require('fs');
const path = require('path');
const { Course, Sale } = require("../database/models/")
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
                    let myCoursesBuyed = [];
                    if (req.session.user) {
                        const query_allCoursesBuyedUser = await Sale.findAll({
                            attributes: ['course_id'],
                            where: {
                                user_id: req.session.user.id
                            }
                        })

                        //Optimizar esto ↓
                        let allCoursesBuyedUser = []
                        query_allCoursesBuyedUser.map(e => {
                            allCoursesBuyedUser.push(e.course_id)
                        })
                        console.log(allCoursesBuyedUser)
                        //Optimizar esto ↑
                        myCourses = allCourses.filter(course => course.owner == req.session.user.id);
                        
                        myCoursesBuyed = allCourses.filter(course => {
                            return (allCoursesBuyedUser.indexOf(course.id) >= 0);
                        });

                        courses = allCourses.filter(course => {
                            return (course.owner != req.session.user.id && allCoursesBuyedUser.indexOf(course.id) == -1 )
                        });



                    }else{
                        courses = allCourses;
                    }
                    res.render('index',{title:"Home", courses, myCourses, myCoursesBuyed })
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