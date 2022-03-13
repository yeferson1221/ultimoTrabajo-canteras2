/**
 *  validamos los campos 
 * 
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com
 *
 * @since [1.0.0]
 *
 */

const { response } = require('express');
const { validationResult } = require('express-validator')

//la funsion para porder validar cada uno de los campos usuario email y password donde si es correcto respondemos un  next(); 
// pero si no tenemos el condicional if  donde  retornamos  res.status(400).json con un estado de   ok: false.
const validarCampos = (req, res = response, next ) => {

    const errores = validationResult( req );

    if ( !errores.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }

    next();
}
// exportamos validar campos 
module.exports = {
    validarCampos
}
