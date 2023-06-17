//middleware to verify if the user is logged in session
function isLoggedMiddleware(req,res,next){
    if(req.session.userLogged){
        return res.redirect('/user/profile');
    }
    next()
}

module.exports = isLoggedMiddleware;