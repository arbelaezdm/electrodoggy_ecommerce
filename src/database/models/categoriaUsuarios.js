module.exports = (sequelize, dataTypes) => {
    let alias = "CategoriaUsuarios";

    let cols = {
      id: {
        type: dataTypes.INTEGER(10),
        primaryKey:true,
        autoIncrement: true
      },
  
      nombre: {
        type: dataTypes.STRING(100),
      }
    };

    let config = {
      tableName: "categoriesusers",
      timestamps: false,
    };
  
    const CategoriaUsuario = sequelize.define(alias, cols, config);

    CategoriaUsuario.associate = function(models) {
      CategoriaUsuario.hasMany(models.Usuarios, {
        as: 'usuarios',
        foreignKey: 'categoriesUsers_id'
      })
    }
    return CategoriaUsuario
  };
  