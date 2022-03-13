/**
 *  aqui esta la logica de la creacion del token con su respectiva libreria 
 *  
 *  
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com
 *
 * @since [1.0.0]
 *
 */


const jwt = require('jsonwebtoken');

const generarJWT = ( uid ) => {

    return new Promise( ( resolve, reject ) => {

        const payload = {
            uid,
        };
    
        jwt.sign( payload, process.env.JWT_SECRET, {
            expiresIn: '12h'
        }, ( err, token ) => {
    
            if ( err ) {
                console.log(err);
                reject('No se pudo generar el JWT');
            } else {
                resolve( token );
            }
    
        });

    });

}


module.exports = {
    generarJWT,
}