module.exports = function (req, res, next) {
    console.log( req.session.user || 'No hay nadie logueado')
    next();
}