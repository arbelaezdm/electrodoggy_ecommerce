module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios";

    let cols = {
      id: {
        type: dataTypes.INTEGER(10),
        primaryKey:true,
        autoIncrement: true
      },
  
      firstName: {
        type: dataTypes.STRING(100),
      },
      lastName: {
        type: dataTypes.STRING(100),
      },
      email: {
        type: dataTypes.STRING(100),
      },
      password: {
        type: dataTypes.STRING(100),
      },
      direction: {
        type: dataTypes.STRING(100),
      },
      dateBirth: {
        type: dataTypes.DATE,
      },
      userImage: {
          type: dataTypes.STRING(200),
          allowNull: true 
      },
      userscol: {
        type: dataTypes.STRING(45),
      },
      categoriesUsers_id: {
        type: dataTypes.INTEGER(11),
      }
    };

    let config = {
      tableName: "users",
      timestamps: false,
    };
  
    const Usuario = sequelize.define(alias, cols, config);


    //relations
    Usuario.associate = function(models) {
      Usuario.belongsTo(models.CategoriaUsuarios, {
        as: 'categoriaUsuario',
        foreignKey: 'categoriesUsers_id'
      })
    }

    return Usuario
  };
  