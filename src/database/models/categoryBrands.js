module.exports = (sequelize, dataTypes) => {
    let alias = "CategoryBrands";
  
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
      tableName: "categoriesbrands",
      timestamps: false,
    };
  
    const Category = sequelize.define(alias, cols, config);

    //Relations
    Category.associate = function(models) {
      Category.hasMany(models.Productos, {
          as: 'productos',
          foreignKey: 'categoriesBrands_id'
      });
    }
  
    return Category;
  };
  