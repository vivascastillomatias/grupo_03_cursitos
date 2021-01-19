module.exports = function(req,res,next){
    let id = req.session.user
    if(id){
        next()
    } else {
        res.render('user/signin', {title:"Registrarse"})
    }
}