let db = require("../database/models");
const Op = db.Sequelize.Op;
const mainController = {
  index: (req, res) => {
    //find products
    //all products
    let allProducts = db.Productos.findAll()
    let gamerProducts = db.Productos.findAll({
        where: {
            categoriesProductos_id: 4
        },
        limit: 4
    })
    //best discount products
    let bestDiscountProducts = db.Productos.findAll({
        where: {
            discount: {[Op.gt] : 20}
        },
        order: [['discount', 'DESC']],
        limit: 4
    })
    //the most sold
    let mostSold = db.Productos.findAll({
        where: {
            regularPrice: {[Op.lt] : 2000}
        },
        order: [['regularPrice', 'ASC']],
        limit: 4
    })
     Promise.all([allProducts, gamerProducts, bestDiscountProducts, mostSold])
        .then(function([products, gamers, discounts, mostSold]){
            res.render('index', {products, gamers, discounts, mostSold})
        })
      .catch((error) => {
        console.log(error);
      });
  },
};
module.exports = mainController;