const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
let db = require("../database/models");
const userController = {

// =================== API's =============================  

// ENDPOINT FOR USERS ARRAY
//   ROUTE ===>     /user/users  
usersArray: (req, res) => {
  db.Usuarios.findAll()
    .then(users => {
      let usersList = users.map((array) => {
        return [
          array.id,
          array.firstName,
          array.email,
          'http//:localhost:3030/user/usersList/' + array.id
        ]
      })
      return res.status(200).json({
        total: users.length,
        users: usersList,
        status: 200
      })
    })
    .catch((e) => {
      console.log(e);
      return res.send(e);
    });
},

// ENDPOINT FOR USER ID
//  ROUTE ===> /user/users

usersId: (req, res) => {
  db.Usuarios.findByPk(req.params.id)
  .then(user=>{
    console.log(user);
    userToSend = user
    if (user) {
      return res.status(200).json({
        name: userToSend.firstName,
        lastName: userToSend.lastName,
        email: userToSend.email,
        imageUrl: "http://localhost:3030/user/users/" + user.id ,
        status: 200
      })
    }else{
      res.render("../views/errorApi.ejs");

    }
  })
  .catch(e=>{console.log(e);})
},

// =============== END OF API's ==============================

  //================ USER REGISTER ========================
  register: (req, res) => {
    db.CategoriaUsuarios.findAll()
      .then(function (categoriaUsuario) {
        return res.render("users/register", {
          categoriaUsuario: categoriaUsuario,
          errors: {
            boundariesCheck: "Test boundaries",
          },
        });
      })
      .catch((e) => {
        console.log(e);
        return res.send(e);
      });
  },

  //===================== USER STORE ========================
  storeUser: (req, res) => {
    let image;
    if (req.files[0] != undefined) {
      image = req.files[0].filename;
    } else {
      image = "default-image.jpg";
    }

    let consultaCategoriaUsuarios = db.CategoriaUsuarios.findAll();

    let consultaUsuarios = db.Usuarios.findAll();

    Promise.all([consultaCategoriaUsuarios, consultaUsuarios])
      .then(function ([categoriaUsuario, usuarios]) {
        const resultValidation = validationResult(req);

        //FORM VALIDATIONS

        //check if result validation isNotEmpty
        if (!resultValidation.isEmpty()) {
          return res.render("users/register", {
            categoriaUsuario: categoriaUsuario,
            errors: resultValidation.mapped(),
            oldData: req.body,
          });
        }

        //password encryptation
        let password = bcryptjs.hashSync(req.body.password, 10);

        //save user in DB
        db.Usuarios.create({
          firstName: req.body.name,
          lastName: req.body.lastName,
          email: req.body.email,
          //encrypted password
          password: password,
          direction: req.body.direction,
          dateBirth: req.body.dateBirth,
          userImage: image,
          categoriesUsers_id: req.body.tipoUsuario,
        });
        res.redirect("./login");
      })
      .catch((e) => {
        console.e(e);
        return res.send(e);
      });
  },

  //===== USERS LIST ========
  listUsers: (req, res) => {
    db.Usuarios.findAll({
      include: [{ association: "categoriaUsuario" }],
    })
      .then(function (usuarios) {
        return res.render("users/userList", { usuarios: usuarios });
      })
      .catch((e) => {
        console.log(e);
        return res.send(e);
      });
  },

  //====  USER EDIT ======
  editUsers: (req, res) => {
    let pedidoUsuario = db.Usuarios.findByPk(req.params.id);
    let pedidoCategoriaUsuario = db.CategoriaUsuarios.findAll();
    Promise.all([pedidoUsuario, pedidoCategoriaUsuario])
      .then(function ([usuario, categoriaUsuario]) {
        res.render("users/editarUsuario", {
          usuario: usuario,
          categoriaUsuario: categoriaUsuario,
        });
      })
      .catch((e) => {
        console.log(e);
        return res.send(e);
      });
  },


  updateUser: (req, res) => {
    let image;
    if (req.files[0] != undefined) {
      image = req.files[0].filename;
    } else {
      image = "default-image.jpg";
    }
    let user = {
      firstName: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      // password: password,
      userImage: image,
      userType: req.body.categoria
    };    

    if (req.session.userLogged.email == user.email) {
      req.session.userLogged = user;
    }

    // return res.send(req.session.userLogged)

    db.Usuarios.update(
      {
        firstName: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        direction: req.body.direction,
        dateBirth: req.body.dateBirth,
        userImage: image,
        categoriesUsers_id: req.body.categoria
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    
    res.redirect("/");
  },


  //===== USER DELETE =========
  deleteUser: (req, res) => {
    db.Usuarios.destroy({
      where: {
        id: req.params.id,
      },
    }).catch((e) => {
      console.log(e);
      return res.send(e);
    });
    res.redirect("/");
  },


  // ==================== LOGIN PROCESS ===========================
  login: (req, res) => {
    return res.render("users/login");
  },

  loginProcess: (req, res) => {
    let resultValidation = validationResult(req);
    //check if result validation is not empty
    if (!resultValidation.isEmpty()) {
      return res.render("users/login", {
        errors: resultValidation.mapped(),
        oldData: req.body
      });
    }
    //find user
    db.Usuarios.findOne({
      include: [{ association: "categoriaUsuario" }],
      where: {
        email: req.body.email,
      },
    })
      .then(function (usuario) {
        //if the user exist
        if (usuario != null) {
          let isOkThePassword = bcryptjs.compareSync(
            req.body.password,
            usuario.password
          );
          //if the password is OK
          if (isOkThePassword) {
            // user information for session
            let user = {
              firstName: usuario.firstName,
              lastName: usuario.lastName,
              email: usuario.email,
              userImage: usuario.userImage,
              userType: usuario.categoriaUsuario.nombre,
            };
            //save the user in session
            req.session.userLogged = user;
            //check if remember check is selected
            if (req.body.rememberUser) {
              //set the cookie with the user email
              res.cookie("userMail", req.body.mail, { maxAge: 1000 * 60 * 5 }); // 5 min
              return res.redirect("/user/profile");
            }
            //if all data is OK
            res.redirect("/user/profile");
          }
          //if the password is incorrect
          // return res.send('password incorrecto')
          console.log(resultValidation.mapped());
          return res.render("users/login", {
            errors: {
              invalidPassword: "Contraseña invalida, vuelve a intentarlo",
            },
            oldData: req.body
          });
        }
      })
      .catch((e) => {
        console.log(e);
        res.send(e);
      });
  },
  // ==================== USER PROFILE ===============================
  profile: (req, res) => {
    db.Usuarios.findOne({
      include: [{ association: "categoriaUsuario" }],
      where: {
        firstName: req.session.userLogged.firstName,
      },
    })
      .then(function (usuarios) {
        return res.render("users/profile", { user: usuarios });
      })
      .catch((e) => {
        console.log(e);
        return res.send(e);
      });
  },
  // ==================== LOGOUT ===========================
  logout: (req, res) => {
    res.clearCookie("userMail");
    req.session.destroy();
    return res.redirect("/");
  },
};
module.exports = userController;