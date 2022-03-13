/**
 * tengo el modelo  del usuario donde estan sus respectivos atributos 
 * tipo de datos  y si es requerido o no 
 *
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com
 *
 * @since [1.0.0]
 *
 */
const { Schema, model } = require('mongoose');
//modelo esquema  Schema se guarda una costante UsuarioSchema 
const UsuarioSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        default: 'USER_ROLE'
    },
    google: {
        type: Boolean,
        default: false
    },
});


UsuarioSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})


// exportamos = model
module.exports = model( 'Usuario', UsuarioSchema );
