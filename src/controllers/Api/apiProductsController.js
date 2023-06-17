const express = require("express");
const fs = require("fs");
const path = require("path");

let db = require("../../database/models");




//Array de categorias asignadas en base de datos para devolver nombres y no ids
const categoriesDb = [
  "Celular",
  "Laptop",
  "Tablets",
  "Gamer",
  "Audio",
  "Accesorios",
];


//Array de colores asignadas en base de datos para devolver colores y no ids
const colorsDb =[
"Red",
"Blue",
"White",
"Black",
"Green",
"Pink",
"Violet",
"Yellow",
"Grey",
"Sky blue",
]

//Array de marcas asignadas en base de datos para devolver marcas y no ids
const brandsDb=[
"Samsung",
"Apple",
"LG",
"Huawei",
"Sony",
"Acer",
"Phillip",
"Nintendo",
"SkullCandy",
"Logitech",
"HP",
"Lenovo",
"Asus",
"Xiaomi",
]


const apiProductsController = {
  listProducts: (req, res) => {
  // Objeto para contar el numero de elementos por categoria 
    let categoriesInDb = {
      celulares: 0,
      laptops: 0,
      tablets: 0,
      gamer: 0,
      audio: 0,
      accesorios: 0,
    };
    
    db.Productos.findAll()
      .then((products) => {  
        let productsList = products.map((array) => {

       // Condicionales para contar el numero de productos por categoria     
          if (array.categoriesProductos_id == 1) {
            categoriesInDb.celulares = categoriesInDb.celulares + 1;
          }
          if (array.categoriesProductos_id == 2) {
            categoriesInDb.laptops = categoriesInDb.laptops + 1;
          }
          if (array.categoriesProductos_id == 3) {
            categoriesInDb.tablets = categoriesInDb.tablets + 1;
          }
          if (array.categoriesProductos_id == 4) {
            categoriesInDb.gamer = categoriesInDb.gamer + 1;
          }
          if (array.categoriesProductos_id == 5) {
            categoriesInDb.audio = categoriesInDb.audio + 1;
          }
          if (array.categoriesProductos_id == 6) {
            categoriesInDb.accesorios = categoriesInDb.accesorios + 1;
          }

          // Objeto que contiene cada producto con su informacion
          return {
            id: array.id,
            name: array.name,
            specificaiton: array.specification,
            category: categoriesDb[array.categoriesProductos_id - 1],
            color: colorsDb[array.categoriesColors_id -1 ],
            brands: brandsDb[array.categoriesBrands_id-1],
            url: "/product/detalle/" + array.id,
          };
        });

        // Respuesta a la peticion con  la api
        let respuesta = {
          meta: {
            status: 200,
          },
          data: {
            count: products.length,
            countByCategory: categoriesInDb,
            products: productsList,
          },
        };
        res.json(respuesta);
      })
      .catch((e) => {
        console.log(e);
        return res.send(e);
      });
  },

  productDetail: (req,res)=>{
        //Consulta a la base de datos por id de producto
        db.Productos.findByPk(req.params.id)
        .then(function(product){
          if (product) {
          let response ={
            meta: {
                status: 200,
              },
            data:{
                id: product.id,
                discount: product.discount,
                name: product.name,
                offerPrice: product.offerPrice,
                regularPrice:product.regularPrice,
                specificaiton:product.specificaiton,
                stock: product.stock,
                brand: brandsDb[product.categoriesBrands_id-1],
                color: colorsDb[product.categoriesColors_id-1],
                category:  categoriesDb[product.categoriesProductos_id - 1],
                image:encodeURI( "/images/productos/" + product.image)

            }
          
          }  
         
          res.json(response)
        }else{
          res.render("../views/errorApi.ejs");

        }
        })
        .catch ((error) => {
          console.log (error)
        })  
     },

};

module.exports = apiProductsController;
