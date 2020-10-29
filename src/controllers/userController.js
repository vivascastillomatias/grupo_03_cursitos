const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const leerJson = () => {
	const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
    return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
}

const grabarJson = (newUsers) => {
    const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
    fs.writeFileSync(usersFilePath, JSON.stringify(newUsers))
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
        console.log(req.body)
        let userEncontrado = users.find(user => user.name == req.body.name);

        if (userEncontrado) {
            //Existe un usuario
            console.log('Sesion iniciada con ', userEncontrado)
            req.session.user = userEncontrado.name;

            if (req.body.rememberMe == 'true') {
                console.log('SE GUARDA LA COOOKIE')
                res.cookie('rememberMe', userEncontrado.name, {maxAge: 1000*60*1 })
            }
            res.redirect('/')

            // if (userEncontrado.password == bcrypt.hashSync(req.body.password, 10)){
            //     //Contraseña correcta y se loguea
            //     //Crear sesion
            //     console.log('Sesion iniciada con ', userEncontrado)
            // }else{
            //     //Contraseña incorrecta y no se debe loguear
            //     console.log('Contraseña incorrecta pa')
            // }
        } else {
            //No existe nombre de usuario
            res.redirect('/users/login')
        }
    },
    logout: (req, res) => {
        req.session.user = '';
        res.redirect('/')
    }
    }

