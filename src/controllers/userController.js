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
        const users = leerJson()
        let password = bcrypt.hashSync(req.body.password, 10);

        let id = users[users.length-1].id +1;
        let newUser = {
            id,
            completed: false,
            email: req.body.email,
            name: req.body.name,
            password: password,
                }
        let newUsers = [...users, newUser]
        grabarJson(newUsers);
        res.redirect('login')
        console.log('Se registró un usuario', newUser)
    },
    modifyView: (req, res) => {
        let users = leerJson();
        let id = req.params.id
        let user = users.find(e => e.id == id)
        res.render('user/modify', {title:"Modificá tu perfil", user})
    },
    modify: (req, res) => {
        let users = leerJson();
        let id =req.params.id 
        let index = users.findIndex(e => e.id == id)

        let fileName;
        req.file ?  fileName = req.file.filename : fileName = users[index].image;

        
        let newUser = { id, image: fileName, ...req.body};

        users.splice(index, 1, newUser);
        grabarJson(users);
        let ruta = '/users/modify/'+id;
		res.redirect(ruta);
    },
    completeUserView: (req, res) => {
        let users = leerJson();
        let id = req.params.id
        let user = users.find(e => e.id == id)
        if (!user.completed) {
            res.render('user/completeUser', {title:"Completa tu perfil", user})
        } else {
            res.redirect("/")
        }  
        console.log('Se accedió a la vista de registro')
    },
    completeUser: (req, res) => {
        let users = leerJson();
        let id =req.params.id 
        let index = users.findIndex(e => e.id == id)

        let fileName;
        req.file ?  fileName = req.file.filename : fileName = ''

        
        let userCompleted = { ...users[index],completed:true, image: fileName, ...req.body};
        console.log(userCompleted)

        users.splice(index, 1, userCompleted);
        grabarJson(users);
		res.redirect("/");
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
            req.session.user = {name: userEncontrado.name,id: userEncontrado.id,completed: userEncontrado.completed};

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

