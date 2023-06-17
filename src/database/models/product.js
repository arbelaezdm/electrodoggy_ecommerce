module.exports =(sequelize, dataTypes) =>{

        let alias = "Productos";

        let cols= {
            id:{
            type: dataTypes.INTEGER(10),
            primaryKey:true,
            autoIncrement: true
            },
            name:{
            type: dataTypes.STRING(100)
            },
             
            regularPrice:{
            type: dataTypes.DECIMAL(10,2),
            },
             
            offerPrice:{
            type: dataTypes.DECIMAL(10,2),
            },
             
            discount:{
            type: dataTypes.DECIMAL(10,2),
            },
             
            image:{
                type: dataTypes.STRING(200)
                // allowNull: true 
            }, 
            specification :{
            type: dataTypes.STRING(100)
            
            },
            description: {
            type: dataTypes.STRING(100)
            },

            stock:{
            type: dataTypes.INTEGER(3)
            },
             
            categoriesBrands_id:{
            type: dataTypes.INTEGER(2)
            },
             
            categoriesProductos_id:{
                type: dataTypes.INTEGER(2)
            },

            categoriesColors_id:{
                type: dataTypes.INTEGER(2)
            }
             
            // productsImage_id:{
            // type: dataTypes.INTEGER(5)
            // },
             

        } 

        let config ={
            tableName: "products",
            timestamps: false
        }

    const Producto = sequelize.define(alias, cols, config);

    //Relations
    Producto.associate = function(models) {
        Producto.belongsTo(models.CategoryBrands, {
            as: 'categorias',
            foreignKey: 'categoriesBrands_id'
        });

        Producto.belongsTo(models.CategorieColors, {
            as: 'colores',
            foreignKey: 'categoriesColors_id'
        });

        Producto.belongsTo(models.CategorieProduct, {
            as: 'productos',
            foreignKey: 'categoriesProductos_id'
        })
    }

    return Producto
}