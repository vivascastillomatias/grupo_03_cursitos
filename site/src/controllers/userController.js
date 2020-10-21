const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const leerJson = () => {
	const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
    return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
}

const grabarJson = (newUser) => {
    const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
    fs.writeFileSync(usersFilePath, JSON.stringify(newUser))
}

module.exports = {
    registerView: (req, res) => {
        res.render('user/signin', {title:"Registrarse"})
        console.log('Se accedió a la vista de registro')
    },
    processRegister: (req, res) => {
        let password = bcrypt.hashSync(req.body.password, 10);
        let newUser = {
            email: req.body.email,
            name: req.body.name,
            password: password,
                }
        let newUsers = [...leerJson(), newUser]
        grabarJson(newUsers);
        res.redirect('login')
        console.log('Se registró un usuario', newUser)
    },
    loginView: (req, res) => {
        res.render('user/login', {title:"Loguearse"})
        console.log('Se accedió a la vista de login')
    },
    processLogin: (req, res) => {
        let users = leerJson();
        let usuarioEncontrado = users.find(users => users.name == req.body.name);
    console.log('Se logueó un usuario', usuarioEncontrado);
    req.session.userName = usuarioEncontrado.name
    if(req.body.rememberMe){
        res.cookie('cookie', usuarioEncontrado.name)
    }
    res.redirect('/')
    }
    }

