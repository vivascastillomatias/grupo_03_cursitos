const fs = require('fs');
const path = require('path');
const { Course, Categorie, Sequelize } = require("../../database/models/")
const Op = Sequelize.Op

module.exports = {
    list: async (req, res) => {
        try {
            // const allCourses = await Course.findAll()
            const allCourses = await Course.findAll({
                include: ['categoryCourse','ownerCourse']
               });
            let count = allCourses.length;
            res.json({count ,allCourses})
        } catch (error) {
            console.log(error)
        }
        console.log("Se accedió a todos los cursos")
    },
    searchById: async (req, res) => {
        try {
            // const allCourses = await Course.findAll()
            const allCourses = await Course.findByPk(req.params.id, {
                include: ['categoryCourse','ownerCourse']
               });
            let count = allCourses.length;
            res.json({count ,allCourses})
        } catch (error) {
            console.log(error)
        }
    }
}