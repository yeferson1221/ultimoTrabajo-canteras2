import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { UsuarioService } from '../../services/usuario.service';

import Swal from 'sweetalert2';
import { delay } from 'rxjs/operators';




import { ModalImagenService } from '../../services/modal-imagen.service';

import { Subscription } from 'rxjs';

import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  public usuario: Usuario;

  public totalUsuarios: number = 0;
  public usuarios: Usuario[] = [];
  public usuariosTemp: Usuario[] = [];

  public imgSubs: Subscription;
  public desde: number = 0;
  public cargando: boolean = true;

  constructor( public sidebarService: SidebarService,
               private usuarioService: UsuarioService,
               private modalImagenService: ModalImagenService) {
    this.usuario = usuarioService.usuario;
  }

ngOnDestroy(): void {
this.imgSubs.unsubscribe();
}

ngOnInit(): void {
this.cargarUsuarios();

this.imgSubs = this.modalImagenService.nuevaImagen
.pipe(delay(100))
.subscribe( img => this.cargarUsuarios() );
}

cargarUsuarios() {
this.cargando = true;
this.usuarioService.cargarUsuarios( this.desde )
.subscribe( ({ total, usuarios }) => {
this.totalUsuarios = total;
this.usuarios = usuarios;
this.usuariosTemp = usuarios;
this.cargando = false;
})
}

cambiarPagina( valor: number ) {
this.desde += valor;

if ( this.desde < 0 ) {
this.desde = 0;
} else if ( this.desde >= this.totalUsuarios ) {
this.desde -= valor; 
}

this.cargarUsuarios();
}



eliminarUsuario( usuario: Usuario ) {

if ( usuario.uid === this.usuarioService.uid ) {
return Swal.fire('Error', 'No puede borrarse a si mismo', 'error');
}

Swal.fire({
title: '¿Borrar usuario?',
text: `Esta a punto de borrar a ${ usuario.nombre }`,
icon: 'question',
showCancelButton: true,
confirmButtonText: 'Si, borrarlo'
}).then((result) => {
if (result.value) {

this.usuarioService.eliminarUsuario( usuario )
.subscribe( resp => {
 
 this.cargarUsuarios();
 Swal.fire(
   'Usuario borrado',
   `${ usuario.nombre } fue eliminado correctamente`,
   'success'
 );
 
});

}
})

}

cambiarRole( usuario:Usuario ) {

this.usuarioService.guardarUsuario( usuario )
.subscribe( resp => {
console.log(resp); 
})
}


abrirModal( usuario: Usuario ) {

this.modalImagenService.abrirModal('usuarios', usuario.uid, usuario.img );
}


  

}
