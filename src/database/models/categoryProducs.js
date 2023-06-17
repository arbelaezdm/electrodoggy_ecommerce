module.exports = (sequelize, dataTypes) => {
    let alias = "CategorieProduct";
  
    let cols = {
      id: {
        type: dataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: dataTypes.STRING(100),
      },
    };
  
    let config = {
      tableName: "categoriesproducts",
      timestamps: false,
    };
  
    const categoryProduct = sequelize.define(alias, cols, config);
  
    return categoryProduct;
  };
  