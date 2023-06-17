const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require ('path');
const authMiddleware = require('../middleware/authMiddleware');
const userLoggedMiddleware = require('../middleware/userLoggedMiddleware')

// ==== EXPRESS VALIDATOR =====
const { body } = require ('express-validator');

const productsController = require("../controllers/productsController");

// =========== MULTER =============
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/productos')
    },
    filename: (req, file, cb) => {
        const newFilename = 'product' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename)
    }
});

const uploadFile = multer({storage});

//=================== VALIDATIONS PRODUCTS ==================================
const validationsProducts = [

    body("brand")
        .notEmpty().withMessage('Elige una marca'),
    body("name")
        .notEmpty().withMessage('Este campo es obligatorio').bail()
        .isLength({ min: 5 }).withMessage("Debe contener al menos 5 caracteres"),
    body("regularPrice")
        .notEmpty().withMessage('Necesitas un precio para tu producto'),
    body("colores")
        .notEmpty().withMessage('Debe elegir un color'),
    body("description")
        .isLength({ min: 20 }).withMessage('Debe tener por lo menos 20 caracteres'),
    body("stock")
        .notEmpty().withMessage('¿Cuanto stock tenes?'),
    body("category")
        .notEmpty().withMessage('Elige una categoria'),
    body("image").custom ((value, { req }) =>  {
        let file = req.files[0];
        let validExtensions = ['.jpg','.jpeg','.png','.gif'];
        if (!file) {
            throw new Error ('Tienes que subir una imagen');
        }else{
            let fileExtension = path.extname(file.originalname);
            if (!validExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${ validExtensions.join(',')}`);

        }

    }
    return true;
    })
];

//================= ROUTES ================================

//================ SHOPPING CART ==========================
router.get("/carrito-compras", productsController.shoppingCart);

//================== PRODUCT DETAIL ====================== OK
router.get("/detalle/:id", productsController.detail);

//============== PRODUCTS LIST ============================= OK
router.get("/listado-productos", productsController.list);

//============= PRODUCT CREATE ============================== OK
router.get('/crear-productos', authMiddleware, userLoggedMiddleware, productsController.create);
router.post('/crear-productos', uploadFile.any('image'), validationsProducts, productsController.store)

//==================== PRODUCT EDIT ========================= OK
router.get('/editar-productos/:id', authMiddleware, userLoggedMiddleware, productsController.edit);
router.put('/editar-productos/:id', uploadFile.any('image'), validationsProducts, productsController.update);

//====== PRODUCT DELETE =============================
router.delete('/editar-productos/:id', productsController.delete);

//================ PRODUCT FIND  ====================
router.post('/find', uploadFile.any('image'), productsController.find);

//============= PRODUCTS CATEGORIES  =================
router.get('/celulares', productsController.cels)
router.get('/laptops', productsController.laptop)
router.get('/tablets', productsController.tablet)
router.get('/gamer', productsController.game)
router.get('/audio', productsController.audio)
router.get('/accesorios', productsController.props)



module.exports = router;
