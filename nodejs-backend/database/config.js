/**
 * configuracion de la conexion BD mongo, tenemos la funsion asincrona de la coneccion 
 * almacenada en  constante dbConnection
 *
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com
 *
 * @since [1.0.0]
 *
 */

const mongoose = require('mongoose');


const dbConnection = async() => {
    // esperamos por la conexion  await usando la variable de entorno DB_CNN donde esta usuario contraseña (.env) 
    try { 
        await mongoose.connect( process.env.DB_CNN , {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });
      // si se cumple el try hay conexion
        console.log('DB Online');
      // si no el catch con el   throw new Error manda el mensaje con el error
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }


}

// exporto  dbConnection 
module.exports = {
    dbConnection
}