module.exports = function (req, res, next) {
    res.locals.userLoged = false;
    res.locals.logSuccess= false;

    if (res.session || req.session.user) {
        res.locals.logSuccess= true;
        res.locals.userLoged = req.session.user;
    }
    next();
}