 
/**
 *  ruta: api/uploads/
 * la ruta para la validación y uso de las imagenes 
 * tambien usa funciones de la carpeta middlewares y archivo validar-jvt.js para validar el token 
 * y los controladores(require('../controllers/uploads')) de las imagnes (mas descripcion usuarios.js)
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com
 *
 * @since [1.0.0]
 *
 */

const { Router } = require('express');
const expressFileUpload = require('express-fileupload');


const { validarJWT } = require('../middlewares/validar-jwt');
const { fileUpload, retornaImagen } = require('../controllers/uploads');

const router = Router();

router.use( expressFileUpload() );

router.put('/:tipo/:id', validarJWT , fileUpload );

router.get('/:tipo/:foto', retornaImagen );



module.exports = router;