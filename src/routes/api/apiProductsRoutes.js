const express = require("express");
const router = express.Router();
const path = require ('path');

const apiProductsController = require("../../controllers/Api/apiProductsController");

//Ruta para obtener todos los productos
router.get('/', apiProductsController.listProducts)

//Ruta para obtener el producto por id
router.get('/:id', apiProductsController.productDetail)


module.exports= router;