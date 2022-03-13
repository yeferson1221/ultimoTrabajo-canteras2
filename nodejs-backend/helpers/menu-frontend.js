
/**
 *  menu del mantenimiento de los usuarios recordar solo en el perfil de admin 
 *  esta se copio  se cambiao alguna configuracion del codigo segun las necesidad 
 *  
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com
 *
 * @since [1.0.0]
 *
 */
const getMenuFrontEnd = (role = 'USER_ROLE') => {

    const menu = [
        {
          titulo: 'Dashboard',
          icono: 'mdi mdi-gauge',
          submenu: [
            { titulo: 'Main', url: '/' },
            
          ]
        },
    
        {
          titulo: 'Mantenimientos',
          icono: 'mdi mdi-folder-lock-open',
          submenu: [
            // { titulo: 'Usuarios', url: 'usuarios' },
            { titulo: 'Médicos', url: 'medicos' },
          ]
        },
      ];

    if ( role === 'ADMIN_ROLE' ) {
        menu[1].submenu.unshift({ titulo: 'Usuarios', url: 'usuarios' })
    }

    return menu;
}

module.exports = {
    getMenuFrontEnd
}
