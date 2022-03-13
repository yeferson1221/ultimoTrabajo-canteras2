 
/**
 *  Ruta: /api/usuarios
 *  tambien uso validadores desde  require('../middlewares/validar-jwt') y validarJWT
 *  para el uso de roles y validadores de sesión
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com
 *
 * @since [1.0.0]
 *
 */

const { Router } = require('express');
const { check } = require('express-validator');// libreria de expres 
const { validarCampos } = require('../middlewares/validar-campos');// aqui esta la ruta del middlewares/validar-campos 

// se requiere el controlador  de usuarios  con sus funciones { getUsuarios, crearUsuario, actualizarUsuario, borrarUsuario }
const { getUsuarios, crearUsuario, actualizarUsuario, borrarUsuario } = require('../controllers/usuarios');

// se require las funciones  validarJWT,  varlidarADMIN_ROLE,  varlidarADMIN_ROLE,  para usarlas en las rutas 
const { 
    validarJWT, 
    varlidarADMIN_ROLE,
    varlidarADMIN_ROLE_o_MismoUsuario
 } = require('../middlewares/validar-jwt');


const router = Router();


router.get( '/', validarJWT , getUsuarios );


// validamos que el post  contenga  nombre, password, email para crear el usuario 
router.post( '/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        validarCampos,
    ], 
    crearUsuario 
);

/**
 *  validamos que el put  para la actualizacion donde tenemos que optener el  validarJWT y   varlidarADMIN_ROLE_o_MismoUsuario,
    recordar que solo el admin puede actualizar  para eso   varlidarADMIN_ROLE_o_MismoUsuario  es necesario validar si es un admin 
    uario normal 
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com
 *
 * @since [1.0.0]
 *
 */


router.put( '/:id',
    [
        validarJWT,
        varlidarADMIN_ROLE_o_MismoUsuario,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('role', 'El role es obligatorio').not().isEmpty(),
        validarCampos,
    ],
    actualizarUsuario
);


/**
 *   ruta del eliminar tenemos la validacion   [ validarJWT, varlidarADMIN_ROLE ], del token y el rol 
     recoradar que solo el admin puede borar usuarios
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com
 *
 * @since [1.0.0]
 *
 */
 
router.delete( '/:id',
    [ validarJWT, varlidarADMIN_ROLE ],
    borrarUsuario
);


// exportamos 
module.exports = router;