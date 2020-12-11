const fs = require('fs');
const path = require('path');
const { Course, Categorie, Sequelize } = require("../../database/models/")
const Op = Sequelize.Op

module.exports = {
    list: async (req, res) => {
        try {
            const allCourses = await Course.findAll()
            res.json({allCourses})
        } catch (error) {
            console.log(error)
        }
        console.log("Se accedió a todos los cursos")
    }
}