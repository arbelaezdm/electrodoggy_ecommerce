const express = require("express");
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

let db = require("../database/models");

const Op = db.Sequelize.Op;

// const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
 // ====== RENDER FOR SHOPPING CART   ======
 shoppingCart: (req, res) => {
  res.render("products/carrito-compras");
 },

 // ====== RENDER FOR SIMPLE PRODUCT DETAIL   ======
 detail: (req, res) => {
  // se agrega la consulta por primary key con sequalize a la base de datos
  db.Productos.findByPk(req.params.id)
   .then(function (product) {
    res.render("products/detalle-producto", { product });
   })
   .catch((error) => {
    console.log(error);
   });
 },

 // ====== RENDER FOR LIST PAGE   ======
 list: (req, res) => {
  // se agrega la consulta para todos los productos
  // con sequalize a la base de datos

  db.Productos.findAll({ include: [{ association: "categorias" }] })
   .then(function (products) {
    res.render("products/listado-productos", { products: products });
   })
   .catch((error) => {
    console.log(error);
   });
 },

 // ====== RENDER FOR PRODUCT CREATE PAGE   ======
 create: (req, res) => {
  let pedidoColores = db.CategorieColors.findAll();

  let pedidoCategorias = db.CategoryBrands.findAll();

  let pedidoCategoriasProductos = db.CategorieProduct.findAll();

  Promise.all([pedidoColores, pedidoCategorias, pedidoCategoriasProductos])
   .then(function ([colors, categories, categoryProduct]) {
    return res.render("products/crear-productos", {
     colors,
     categories,
     categoryProduct,
    });
   })
   .catch(function (e) {
    console.log(e);
   });
 },

 // ======= CREATE - METHOD TO STORE ======
 store: (req, res) => {
  let image;

  if (req.files[0] != undefined) {
   image = req.files[0].filename;
  } else {
   image = "default-image.jpg";
  }

  let pedidoColores = db.CategorieColors.findAll();

  let pedidoCategorias = db.CategoryBrands.findAll();

  let pedidoCategoriasProductos = db.CategorieProduct.findAll();

  Promise.all([pedidoColores, pedidoCategorias, pedidoCategoriasProductos])
   .then(function ([colors, categories, categoryProduct]) {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
     return res.render("products/crear-productos", {
      errors: resultValidation.mapped(),
      oldData: req.body,
      colors,
      categories,
      categoryProduct,
     });
    }
    db.Productos.create({
     name: req.body.name,
     regularPrice: req.body.regularPrice,
     offerPrice: req.body.offerPrice,
     discount: req.body.discount,
     image: image,
     specification: req.body.specification,
     description: req.body.description,
     stock: req.body.stock,
     categoriesBrands_id: req.body.brand,
     categoriesProductos_id: req.body.category,
     categoriesColors_id: req.body.colores,
    });

    res.redirect("/");
   })
   .catch(function (e) {
    console.log(e);
   });
 },

 // ====== RENDER FOR EDIT PAGE   ======
 edit: (req, res) => {
  let pedidoProducto = db.Productos.findByPk(req.params.id);

  let pedidoColores = db.CategorieColors.findAll();

  let pedidoCategorias = db.CategoryBrands.findAll();

  let pedidoCategoriasProductos = db.CategorieProduct.findAll();

  Promise.all([
   pedidoProducto,
   pedidoColores,
   pedidoCategorias,
   pedidoCategoriasProductos,
  ]).then(function ([producto, colors, categories, categoryProduct]) {
   return res.render("products/editar-productos", {
    producto,
    colors,
    categories,
    categoryProduct,
   });
  });
 },

 //====== UPDATE PRODUCT ======================
 update: (req, res) => {
  let image;

  if (req.files[0] != undefined) {
   image = req.files[0].filename;
  } else {
   image = image;
  }

  let pedidoProducto = db.Productos.findByPk(req.params.id);

  let pedidoColores = db.CategorieColors.findAll();

  let pedidoCategorias = db.CategoryBrands.findAll();

  let pedidoCategoriasProductos = db.CategorieProduct.findAll();

  Promise.all([
   pedidoProducto,
   pedidoColores,
   pedidoCategorias,
   pedidoCategoriasProductos,
  ])
   .then(function ([producto, colors, categories, categoryProduct]) {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
     return res.render("products/editar-productos", {
      errors: resultValidation.mapped(),
      producto: req.body,
      oldData: req.body,
      producto,
      colors,
      categories,
      categoryProduct,
     });
    }
    db.Productos.update(
     {
      name: req.body.name,
      regularPrice: req.body.regularPrice,
      offerPrice: req.body.offerPrice,
      discount: req.body.discount,
      image: image,
      specification: req.body.specification,
      description: req.body.description,
      stock: req.body.stock,
      categoriesBrands_id: req.body.brand,
      categoriesProductos_id: req.body.category,
      categoriesColors_id: req.body.colores,
     },
     {
      where: {
       id: req.params.id,
      },
     }
    );

    res.redirect("/");
   })
   .catch(function (e) {
    console.log(e);
   });
 },

 delete: (req, res) => {
  db.Productos.destroy({
   where: {
    id: req.params.id,
   },
  });

  res.redirect("/");
 },

 find: (req, res) => {
  db.Productos.findAll({
   where: {
    name: { [Op.like]: req.body.findProduct + "%" },
   },
  })
   .then(function (products) {
    if (products == "") {
     res.render("products/error.ejs");
    } else {
     res.render("products/busqueda-productos", { products: products });
    }
   })
   .catch((e) => {
    res.send(e);
   });
 },

 //============ PRODUCTS CATEGORIES ==================

 cels: (req, res) => {
  db.Productos.findAll({
   where: {
    categoriesProductos_id: 1,
   },
  })
   .then((products) => {
    res.render("products/listado-celulares.ejs", { products });
   })
   .catch((e) => {
    res.send(e);
   });
 },

 laptop: (req, res) => {
  db.Productos.findAll({
   where: {
    categoriesProductos_id: 2,
   },
  })
   .then((products) => {
    res.render("products/listado-laptops.ejs", { products });
   })
   .catch((e) => {
    res.send(e);
   });
 },

 tablet: (req, res) => {
  db.Productos.findAll({
   where: {
    categoriesProductos_id: 3,
   },
  })
   .then((products) => {
    res.render("products/listado-tablets.ejs", { products });
   })
   .catch((e) => {
    res.send(e);
   });
 },

 game: (req, res) => {
  db.Productos.findAll({
   where: {
    categoriesProductos_id: 4,
   },
  })
   .then((products) => {
    res.render("products/listado-gamers.ejs", { products });
   })
   .catch((e) => {
    res.send(e);
   });
 },

 audio: (req, res) => {
  db.Productos.findAll({
   where: {
    categoriesProductos_id: 5,
   },
  })
   .then((products) => {
    res.render("products/listado-audio.ejs", { products });
   })
   .catch((e) => {
    res.send(e);
   });
 },

 props: (req, res) => {
  db.Productos.findAll({
   where: {
    categoriesProductos_id: 6,
   },
  })
   .then((products) => {
    res.render("products/listado-accesorios.ejs", { products });
   })
   .catch((e) => {
    res.send(e);
   });
 },
};

module.exports = productsController;
