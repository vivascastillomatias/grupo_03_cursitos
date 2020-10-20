const fs = require('fs');
const path = require('path');
// const coursesFilePath = path.join(__dirname, '../data/coursesDataBase.json');
// const courses = JSON.parse(fs.readFileSync(coursesFilePath, 'utf-8'));

module.exports = {
    all: (req, res)=>{
        const coursesFilePath = path.join(__dirname, '../data/coursesDataBase.json');
        const courses = JSON.parse(fs.readFileSync(coursesFilePath, 'utf-8'));
        res.render('index', {courses: courses, title:"Cursitos"})
    }
}