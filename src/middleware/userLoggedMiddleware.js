//aplication middleware

function userLoggedMiddleware(req, res, next) {
 //set te locals variable named isLogged = false
 //res.locals are variables that I can share in all views
 res.locals.isLogged = false;
 res.locals.userAdmin = false;

 
 if (req.session.userLogged) {
   console.log(req.session.userLogged.userType);
  if (req.session.userLogged.userType == "Admin" || req.session.userLogged.userType == 1 ) {
   res.locals.userAdmin = true;
  } 

  res.locals.isLogged = true;
  res.locals.userLogged = req.session.userLogged;
 }

 next();
}

module.exports = userLoggedMiddleware;
