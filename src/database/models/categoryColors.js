module.exports = (sequelize, dataTypes) => {
  let alias = "CategorieColors";

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
    tableName: "categoriescolors",
    timestamps: false,
  };

  const Color = sequelize.define(alias, cols, config);

  return Color;
};
