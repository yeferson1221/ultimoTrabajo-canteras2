/**
 *  configuracion cuenta de google
 *  
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com
 *
 * @since [1.0.0]
 *
 */

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client( process.env.GOOGLE_ID );


const googleVerify = async( token ) => {

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        //esta descripcion es de google  donde copie y pegue el codigo para su configuracion y modifique
        // lo que necesitaba 
    });
    const payload = ticket.getPayload();
    const { name, email, picture } = payload;

    return { name, email, picture };
}

module.exports = {
    googleVerify
}