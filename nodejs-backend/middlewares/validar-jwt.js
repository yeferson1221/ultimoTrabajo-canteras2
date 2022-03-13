/**
 *  declaramos el token 
 *  y creamos las promesas donde se van  a verificar tanto 
 *  usuario admin y normal   
 * 
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com
 *
 * @since [1.0.0]
 *
 */

const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');



const validarJWT = (req, res, next) => {

    // Leer el Token req.header
    const token = req.header('x-token');

    // condicional si  no hay token retornamos un  status(401).json donde tenemos estado   ok: false, y mostramos   msg: 'No hay token en la petición'
    if ( !token ) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    // pero si no se cumple arriba en el if  tenemos un try donde verificamos el token  usando tambien variable de entorno JWT_SECRET 
    // y si es correcto el token respondemos con un next(); siguiente
    try {
        
        const { uid } = jwt.verify( token, process.env.JWT_SECRET );
        req.uid = uid;

        next();
    // ahora si el token no es correcto  retornamos un  res.status(401).json con un estado de ok: false, y su mensaje  msg: 'Token no válido'
    } catch (error) { 
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }
 
}

// aqui validamos el role del admin  en una promesa  asincrona 
const varlidarADMIN_ROLE = async(req, res, next)  => {
    
    const uid = req.uid;
    
    try {
        
        const usuarioDB = await Usuario.findById(uid);

        if ( !usuarioDB ) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario no existe'
            });
        }

        if ( usuarioDB.role !== 'ADMIN_ROLE' ) {
            return res.status(403).json({
                ok: false,
                msg: 'No tiene privilegios para hacer eso'
            });
        }

        next();


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}
// aqui validamos el role del admin o usuario normal   en una promesa  asincrona 
const varlidarADMIN_ROLE_o_MismoUsuario = async(req, res, next)  => {

    const uid = req.uid;
    const id  = req.params.id;
    
    try {
        
        const usuarioDB = await Usuario.findById(uid);

        if ( !usuarioDB ) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario no existe'
            });
        }

        if ( usuarioDB.role === 'ADMIN_ROLE' || uid === id ) {
        
            next();
            
        } else {
            return res.status(403).json({
                ok: false,
                msg: 'No tiene privilegios para hacer eso'
            });
        }

        


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}



// exportamos todas las promesas 
module.exports = {
    validarJWT,
    varlidarADMIN_ROLE,
    varlidarADMIN_ROLE_o_MismoUsuario
}