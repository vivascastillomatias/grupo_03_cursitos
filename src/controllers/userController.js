const {User} = require('../database/models');

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
        // console.log('Se accedió a la vista de registro')
    },
    processRegister: async (req, res) => {
        try {
            let password = bcrypt.hashSync(req.body.password, 10);
            await User.create({
                user: req.body.name,
                email: req.body.email,
                password: password,
            })
        } catch (error) {
            console.log(error)
        }
        res.redirect('login')
    },
    modifyView: async(req, res) => {
        // let users = leerJson();
        // let id = req.params.id
        // let user = users.find(e => e.id == id)
        try {
            let user = await User.findByPk(req.params.id)
            res.render('user/modify', {title:"Modificá tu perfil", user})
        } catch (error) {
            console.log(error)
        }
    },
    modify: async(req, res) => {
        try {
            let fileName;
            req.file ?  fileName = req.file.filename : fileName = ''
            await User.update({
                email: req.body.email,
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                image: fileName,
                bio: req.body.bio,
                completed: 1,
            },
            {   where: {
                id: req.params.id
            }}
            )
            res.redirect('/')
        } catch (error) { console.log(error) }
        let ruta = '/users/modify/'+id;
		res.redirect(ruta);
    },
    completeUserView: async (req, res) => {
        // let users = leerJson();
        // let id = req.params.id
        // let user = users.find(e => e.id == id)

        try {
            let user = await User.findOne({
                where: { 
                    id: req.params.id
                }
            })
            if (!user.completed) {
                res.render('user/completeUser', {title:"Completa tu perfil", user})
            } else {
                res.redirect("/")
            }
        } catch (error) {
            console.log(error)
        }
        // console.log('Se accedió a la vista de registro')
    },
    completeUser: async (req, res) => {
        try {
            let fileName;
            req.file ?  fileName = req.file.filename : fileName = ''
            await User.update({
                email: req.body.email,
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                image: fileName,
                bio: req.body.bio,
                completed: 1,
            },
            {   where: {
                id: req.params.id
            }})

            let userEncontrado = await User.findByPk(req.params.id)
            req.session.user = {user: userEncontrado.user,id: userEncontrado.id,completed: userEncontrado.completed, image: userEncontrado.image};
            res.redirect('/')
        } catch (error) { console.log(error) }
    },
    loginView: (req, res) => {
        res.render('user/login', {title:"Loguearse"})
        console.log('Se accedió a la vista de login')
    },
    processLogin: async(req, res) => {
        // let users = leerJson();
        // let userEncontrado = users.find(user => user.name == req.body.name);
        let userEncontrado;
        try {
            userEncontrado = await User.findOne({
                where: { 
                    email: req.body.email
                }
            })
            if (userEncontrado) {
                //Existe un usuario
                bcrypt.compare(req.body.password, userEncontrado.password, function(err, result) {
                    if (result) {
                        // ------------------PASSWORD CORRECTA----------------
                        req.session.user = {user: userEncontrado.user,id: userEncontrado.id,completed: userEncontrado.completed, image: userEncontrado.image};
            
                        if (req.body.rememberMe == 'true') {
                            console.log('SE GUARDA LA COOOKIE')
                            res.cookie('rememberMe', userEncontrado.user, {maxAge: 1000*60*1 })
                        }
                        res.redirect('/')
                    } else {
                        // ------------------PASSWORD INCORRECTA----------------
                        res.redirect('/users/login')
                    }
                });
            } else {
                //No existe nombre de usuario
                res.redirect('/users/login')
            }
        } catch (error) {
            console.log(error)
        }
    },
    logout: (req, res) => {
        req.session.user = '';
        res.redirect('/')
    },
    modifyPasswordView: (req, res)=> {
        res.render('user/modifyPassword', {title:"Cambiar contraseña"})
    },
    modifyPassword: async(req, res)=> {
        try {
            //Controlar que las contraseñas sean iguales y que la anterior sea correcta

            userEncontrado = await User.findOne({
                where: { 
                    id: req.session.user.id
                }
            })
            if (userEncontrado) {
                //Existe un usuario
                bcrypt.compare(req.body.passwordOld, userEncontrado.password, function (err, result) {
                    if (result) {
                        // ------------------PASSWORD CORRECTA----------------
                        console.log('CAMBIAR CONTRASEÑA')
                        let password = bcrypt.hashSync(req.body.passwordNew, 10);
                        if (req.body.passwordNewRepeat === req.body.passwordNew) {
                            User.update({
                                password: password
                            },
                            {   where: {
                                id: req.session.user.id
                            }})
                            res.redirect('/')
                        } else {
                            console.log('No se puede cambiar la contraseña')
                            res.redirect('/')
                        }

                    } else {
                        // ------------------PASSWORD INCORRECTA----------------
                        console.log('NO CAMBIAR CONTRASEÑA')
                    }
                });
            } else {
                //No existe nombre de usuario
                res.redirect('/users/login')
            }

            //-------------------------------------------------

            
        } catch (error) {
            console.log(error)
        }
    }
    }

