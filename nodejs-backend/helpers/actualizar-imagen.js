/**
 *  desde aqui actualizamos las imagenes y las borramos 
 *  
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com
 *
 * @since [1.0.0]
 *
 */

const Usuario = require('../models/usuario');
const fs = require('fs');


const borrarImagen = ( path ) => {
    if ( fs.existsSync( path ) ) {
        // borrar la imagen anterior
        fs.unlinkSync( path );
    }
}

// actualizar cambiar a otra imagen 
const actualizarImagen = async(tipo, id, nombreArchivo) => {

    let pathViejo = '';
    
    switch( tipo ) {
    
        
        case 'usuarios':

            const usuario = await Usuario.findById(id);
            if ( !usuario ) {
                console.log('No es un usuario por id');
                return false;
            }

            pathViejo = `./uploads/hospitales/${ usuario.img }`;
            borrarImagen( pathViejo );

            usuario.img = nombreArchivo;
            await usuario.save();
            return true;

        break;
    }


}


// exportamos  actualizarImagen
module.exports = { 
    actualizarImagen
}
