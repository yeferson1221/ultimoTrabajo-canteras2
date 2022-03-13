/**
 * Path: '/api/login'
 * tenemos el loggin tambien con sus respectivas validaciones 
 * este loggin ademas tiene dos formas de logiarse 
 * 1) cuenta creada normal
 * 2) cuenta creada con google
 * 
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com
 *
 * @since [1.0.0]
 *
 */


const { Router } = require('express');
const { login, googleSignIn, renewToken } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// tenemos el post del loggeo con cuenta normal  donde el email y possword es obligatorio donde require('../middlewares/validar-campos')

router.post( '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        validarCampos
    ],
    login
);

// tenemos el post del loggeo por cuenta de google donde el email y possword es obligatorio donde require('../middlewares/validar-campos')
router.post( '/google',
    [
        check('token', 'El token de Google es obligatorio').not().isEmpty(),
        validarCampos
    ],
    googleSignIn
)
// el get con el / '/renew' 
router.get( '/renew',
    validarJWT,
    renewToken
)




// exportamos router

module.exports = router;
