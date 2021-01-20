const { User, Sequelize } = require("../../database/models/")
const Op = Sequelize.Op

const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

module.exports = {
    list: async (req, res) => {
        try {
            const allUsers = await User.findAll()
            let count = allUsers.length;
            res.json({count ,allUsers})
        } catch (error) {
            console.log(error)
        }
    },
    search: async (req, res) => {
        try {
            const search = await User.findAll()
            res.json({search})
        } catch (error) {
            console.log(error)
        }
    },
    searchById: async (req, res) => {
        try {
            console.log(req.params.id)
            const course = await User.findByPk(req.params.id)
            res.json({course})
        } catch (error) {
            console.log(error)
        }
    },
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
        res.send('ok')
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
    completeUser: (req, res) => {
        
    },
    loginView: (req, res) => {

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
                        res.send('ok')
                    } else {
                        // ------------------PASSWORD INCORRECTA----------------
                        res.redirect('error')
                    }
                });
            } else {
                //No existe nombre de usuario
                res.send('error')
            }
        } catch (error) {
            console.log(error)
        }
    },
    logout: (req, res) => {
        req.session.user = '';
        res.send('ok')
    },
    modifyPasswordView: (req, res)=> {

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
                            res.send('ok')
                        } else {
                            console.log('No se puede cambiar la contraseña')
                            res.send('error')
                        }

                    } else {
                        // ------------------PASSWORD INCORRECTA----------------
                        res.send('error')
                    }
                });
            } else {
                //No existe nombre de usuario
                res.send('error')
            }

            //-------------------------------------------------

            
        } catch (error) {
            console.log(error)
        }
    }
    }