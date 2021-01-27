module.exports = function(req,res,next){
    let id = req.session.user
    if(id){
        next()
    } else {
        res.render('user/login', {title:"Iniciar sesión"})
    }
}